import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CacheDataUtility } from 'src/app/caches/cache-data-utility';
import { ChartDataEntity } from 'src/app/interfaces/chart/chart-data-entity';
import { ChartLineDataEntity } from 'src/app/interfaces/chart/chart-line-data-entity';
import { TodayPatientsSchedulesComponent } from './today-patients-schedules/today-patients-schedules.component';
import { ServiceResultWrapperUtility } from 'src/app/utility/service-result-wrapper-utility';
import { DashboardService } from '../services/dashboard.service';
import { ChartFilterEntity } from 'src/app/interfaces/dashboard/chart-filter-entity';
import { filter } from 'rxjs';
import { HamtaSettings } from 'src/app/repository/hamtano-settings';
import { BaseDataEntity } from 'src/app/interfaces/data/base-data-entity';

@Component({
  selector: 'dashboard-main-page',
  templateUrl: './dashboard-main-page.component.html',
  styleUrls: ['./dashboard-main-page.component.css']
})
export class DashboardMainPageComponent implements OnInit {
  constructor(
    public cacheData: CacheDataUtility,
    public dialog: MatDialog,
    public serviceWrapper: ServiceResultWrapperUtility,
    public dashboardService: DashboardService,
    public settings: HamtaSettings

  ) { }

  ngOnInit(): void {
    this.settings.getJSON().subscribe(r => {
      this.settings.serverUrl = r.serviceAddress;
      this.getgGnderChartData();
      this.getDoctorPatientList();
    });
  }

  public onOpenTodaySchedule() {
    this.dialog.open(TodayPatientsSchedulesComponent, {
      autoFocus: false,
    });
  }

  public async getgGnderChartData() {
    this.isBusy = true;
    let chartFilter = <ChartFilterEntity>{};
    chartFilter.fromDate = '1402/12/01';
    chartFilter.endDate = '1402/12/29';
    chartFilter.type = 1;
    this.genderChartData = await this.serviceWrapper.parse(this.dashboardService.getChartData(chartFilter)) as ChartDataEntity[];
    this.isBusy = false;
  }

  public async getDoctorPatientList() {
    this.isBusy = true;
    let chartFilter = <ChartFilterEntity>{};
    chartFilter.fromDate = '1402/12/01';
    chartFilter.endDate = '1402/12/29';
    chartFilter.type = 2;
    this.doctorPatientList = await this.serviceWrapper.parse(this.dashboardService.getChartData(chartFilter)) as ChartDataEntity[];
    this.isBusy = false;
  }
  public isBusy: boolean = false;
  public genderChartData: ChartDataEntity[] = [];
  public doctorPatientList: ChartDataEntity[] = [];
  public patientServiceData: ChartDataEntity[] = [
    {
      name: 'لمینت',
      value: 20
    },
    {
      name: 'پرکردن دندان',
      value: 40
    },
    {
      name: ' تست ۲۰',
      value: 60
    },
    {
      name: 'test 30',
      value: 10
    }
  ];
  public DateList: BaseDataEntity[] = [
    {
      name: 'امروز',
      code: 1,
      tag: ""
    },
    {
      name: 'ماه مشخص',
      code: 2,
      tag: ""
    },
    {
      name: 'محدوده زمانی',
      code: 3,
      tag: ""
    },
  ]
}
