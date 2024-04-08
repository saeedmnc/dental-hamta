import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HamtaDentalDashboardRoutingModule } from './hamta-dental-dashboard-routing.module';
import { DashboardMainPageComponent } from './dashboard-main-page/dashboard-main-page.component';
import { HamtanoPanelModule } from '../hamtano-panel/hamtano-panel.module';
import { HimsChartsModule } from '../hims-charts/hims-charts.module';
import { MatCardModule } from '@angular/material/card';
import { HamtanoPatientModule } from '../hamtano-patient/hamtano-patient.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TodayPatientsSchedulesComponent } from './dashboard-main-page/today-patients-schedules/today-patients-schedules.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';
import { HimsCommonModule } from '../hims-common/hims-common.module';
import { ChartCardItemComponent } from './chart-card-item/chart-card-item.component';


@NgModule({
  declarations: [
    DashboardMainPageComponent,
    TodayPatientsSchedulesComponent,
    ChartCardItemComponent
  ],
  imports: [
    CommonModule,
    HamtaDentalDashboardRoutingModule,
    HamtanoPanelModule,
    HimsChartsModule,
    MatCardModule,
    HamtanoPatientModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    GridModule,
    HttpClientModule,
    HimsCommonModule

  ]
})
export class HamtaDentalDashboardModule { }
