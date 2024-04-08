import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CacheDataUtility } from 'src/app/caches/cache-data-utility';
import { PatientScheduleDialogComponent } from '../patient-schedule-dialog/patient-schedule-dialog.component';
import { PatientEntity } from 'src/app/interfaces/patients/patient-entity';
import { PatientService } from '../services/patient.service';
import { ServiceResultWrapperUtility } from 'src/app/utility/service-result-wrapper-utility';
import { PatientScheduleEntity } from 'src/app/interfaces/patient/patient-schedule-entity';
import { DoctorService } from '../../hamta-dental-doctor/services/doctor.service';
import { ScheduleEntity } from 'src/app/ineterfaces/schedule/schedule-entity';
import { HamtaSettings } from 'src/app/repository/hamtano-settings';

@Component({
  selector: 'add-patient-page',
  templateUrl: './add-patient-page.component.html',
  styleUrls: ['./add-patient-page.component.css']
})
export class AddPatientPageComponent implements OnInit {
  constructor(
    public cacheData: CacheDataUtility,
    public dialog: MatDialog,
    public patientService: PatientService,
    public doctorServcie: DoctorService,
    public serviceWrapper: ServiceResultWrapperUtility,
    public settings: HamtaSettings
  ) {
    this.patient = <PatientEntity>{};
    this.patientSchedule = <PatientScheduleEntity>{};
    this.drScheduleSelected = <ScheduleEntity>{};
  }

  ngOnInit(): void {
    this.settings.getJSON().subscribe(r => {
      this.settings.serverUrl = r.serviceAddress;
    })
  }

  public onCancel() {
    this.dialog.closeAll();
  }



  public onDrScheduleSelected(value: ScheduleEntity) {
    if (value) {
      this.drScheduleSelected = value;
      this.selectSchedule();
    }
  }

  public async onSelectedDr(drCode: number) {
    this.isBusy = true;
    this.patient.drCode = drCode;
    this.doctorSchedule = await this.serviceWrapper.parse(this.doctorServcie.getDoctorSchedulesByDrCode(this.patient.drCode)) as ScheduleEntity[];
    this.isBusy = false;
  }
  public async onSave() {
    this.isBusy = true;
    let result = await this.serviceWrapper.parse(this.patientService.savePatient(this.patient)) as PatientEntity;
    if (result) {
      this.patientSchedule.admCode = result.admCode;
      this.patientSchedule.drCode = result.drCode;
      this.patientSchedule.scheduleDay = this.drScheduleSelected.scheduleDate;
      let scheduleRes = await this.serviceWrapper.parse(this.patientService.savePatientSchedule(this.patientSchedule)) as PatientScheduleEntity;
      if (scheduleRes) {
        alert(1);
      }
    }
    this.isBusy = false;
  }

  public async selectSchedule() {
    this.dialog.open(PatientScheduleDialogComponent, {
      autoFocus: false,
      data: this.drScheduleSelected
    }).afterClosed().subscribe(r => {
      console.log(r); 
      this.patientSchedule.scheudleTime = r.value;
    });
  }

  public patient: PatientEntity;
  public patientSchedule: PatientScheduleEntity;
  public drScheduleSelected: ScheduleEntity;
  public doctorSchedule: ScheduleEntity[] = [];
  public isBusy: boolean = false;
}
