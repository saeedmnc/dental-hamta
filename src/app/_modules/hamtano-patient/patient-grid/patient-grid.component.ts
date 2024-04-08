import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CacheDataUtility } from 'src/app/caches/cache-data-utility';
import { PatientEntity } from 'src/app/interfaces/patients/patient-entity';
import { AddPatientPageComponent } from '../add-patient-page/add-patient-page.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { ServiceResultWrapperUtility } from 'src/app/utility/service-result-wrapper-utility';
import { PatientService } from '../services/patient.service';
import { HamtaSettings } from 'src/app/repository/hamtano-settings';
@Component({
  selector: 'patient-grid',
  templateUrl: './patient-grid.component.html',
  styleUrls: ['./patient-grid.component.css']
})
export class PatientGridComponent implements OnInit {
  constructor(
    public http: HttpClient,
    public cacheData: CacheDataUtility,
    public bottomSheet: MatBottomSheet,
    public dialog: MatDialog,
    public router: Router,
    public serviceWrapper: ServiceResultWrapperUtility,
    public patientServcie: PatientService,
    public settings: HamtaSettings
  ) {

  }
  ngOnInit(): void {
    this.settings.getJSON().subscribe(r => {
      this.settings.serverUrl = r.serviceAddress;
      this.getPatient();
    });
  }

  public onAddnewPatient() {
    this.dialog.open(AddPatientPageComponent, {
      width: '700px',
      autoFocus: false,
      disableClose: true
    });
  }

  public async getPatient() {
    this.isBusy = true;
    this.patients = await this.serviceWrapper.parse(this.patientServcie.getPatient()) as PatientEntity[];
    this.isBusy = false;
  }

  public onSelectedPatient(patient: PatientEntity) {
    if (patient) {
      this.cacheData.patient = patient;
      this.router.navigate(['main/patients/document/profile']);
    }
  }




  public patients: PatientEntity[] = [];
  colDefs: ColDef[] = [
    { field: "code", headerName: 'کد' },
    { field: "name", headerName: 'نام' },
    { field: "family", headerName: 'نام خانوادگی' },
    { field: "drName", headerName: 'نام دکتر' },
    { field: "bimeName", headerName: 'بیمه' },
  ];
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // colDefs: ColDef[] = [
  //   { field: "make" },
  //   { field: "model" },
  //   { field: "price" },
  //   { field: "electric" }
  // ];

  @Input() public isShowPatientPage: boolean = true;
  @Input() public height!: number;
  public isBusy: boolean = false;
}
