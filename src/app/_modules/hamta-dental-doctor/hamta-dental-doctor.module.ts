import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HamtaDentalDoctorRoutingModule } from './hamta-dental-doctor-routing.module';
import { DoctorMainPageComponent } from './doctor-main-page/doctor-main-page.component';
import { HamtanoPanelModule } from '../hamtano-panel/hamtano-panel.module';
import { DoctorGridComponent } from './doctor-main-page/doctor-grid/doctor-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { CreateDoctorComponent } from './doctor-main-page/create-doctor/create-doctor.component';
import { HimsCommonModule } from '../hims-common/hims-common.module';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { FormsModule } from '@angular/forms';
import { DoctorScheduleSelectorComponent } from './doctor-main-page/doctor-schedule-selector/doctor-schedule-selector.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DoctorResumeComponent } from './doctor-main-page/doctor-resume/doctor-resume.component';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [
    DoctorMainPageComponent,
    DoctorGridComponent,
    CreateDoctorComponent,
    DoctorListComponent,
    DoctorScheduleSelectorComponent,
    DoctorResumeComponent,
  ],
  imports: [
    CommonModule,
    HamtaDentalDoctorRoutingModule,
    HamtanoPanelModule,
    GridModule,
    HttpClientModule,
    MatButtonModule,
    HimsCommonModule,
    MatCardModule,
    MatDividerModule,
    TreeViewModule,
    FormsModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatSidenavModule
  
  ]
})
export class HamtaDentalDoctorModule { }
