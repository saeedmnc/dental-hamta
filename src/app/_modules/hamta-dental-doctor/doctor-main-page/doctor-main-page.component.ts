import { Component, OnInit } from '@angular/core';
import { CacheDataUtility } from 'src/app/caches/cache-data-utility';
import { ScheduleEntity } from 'src/app/ineterfaces/schedule/schedule-entity';
import { DoctorEntity } from 'src/app/interfaces/dr/doctor-entity';
import { DoctorService } from '../services/doctor.service';
import { ServiceResultWrapperUtility } from 'src/app/utility/service-result-wrapper-utility';
import { HamtaSettings } from 'src/app/repository/hamtano-settings';
import { HttpClient } from '@angular/common/http';
import { ExpertlistTreeViewEntity } from 'src/app/interfaces/dr/doctor/expertlist-tree-view-entity';
import Swal from 'sweetalert2';

@Component({
  selector: 'doctor-main-page',
  templateUrl: './doctor-main-page.component.html',
  styleUrls: ['./doctor-main-page.component.css']
})
export class DoctorMainPageComponent implements OnInit {
  constructor(
    public cacheData: CacheDataUtility,
    public doctorService: DoctorService,
    public serviceWrapper: ServiceResultWrapperUtility,
    public settings: HamtaSettings,
    public http: HttpClient,
    // public messageService:Mes``
  ) {
    this.doctor = <DoctorEntity>{};
  }

  ngOnInit(): void {
    this.settings.getJSON().subscribe(r => {
      this.settings.serverUrl = r.serviceAddress;
      this.getDoctors();
    });
    this.http.get('assets/expertListTreeView.json').subscribe(r => {
      this.expertListTreeView = r as ExpertlistTreeViewEntity[];
    })
  }

  public async getDoctors() {
    this.doctorsList = await this.serviceWrapper.parse(this.doctorService.getDoctors()) as DoctorEntity[];
  }

  public async onSave() {
    this.isBusy = true;
    let result = await this.serviceWrapper.parse(this.doctorService.saveDoctors(this.doctor));
    if (result) {
      Swal.fire({
        text: 'با موفقیت ثبت شد',
        showConfirmButton: true,
        confirmButtonText: 'تایید',
        icon: 'success',
        confirmButtonColor: 'green'
      });
    }

    this.isBusy = false;
  }

  public async selectedDoctor(doctor: DoctorEntity) {
    this.doctor = await this.serviceWrapper.parse(this.doctorService.getDrByDrCode(doctor.code));

    // this.getDoctorSchedules(this.doctor.code);
  }

  public async getDoctorSchedules(drCode: number) {
    this.isBusy = true;
    this.doctorSchedule = await this.serviceWrapper.parse(this.doctorService.getDoctorSchedulesByDrCode(drCode));
    this.doctor.schedules = this.doctorSchedule;
    this.isBusy = false;
  }

  public expertListTreeView: ExpertlistTreeViewEntity[] = [];
  public doctor: DoctorEntity;
  public doctorSchedule: ScheduleEntity[] = [];
  public isBusy: boolean = false;
  public doctorsList: DoctorEntity[] = [];
  public isOpenSchedule: boolean = false;
} 
