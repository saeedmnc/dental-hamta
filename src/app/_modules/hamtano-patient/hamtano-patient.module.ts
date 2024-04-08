import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamtanoPatientRoutingModule } from './hamtano-patient-routing.module';
import {GridModule} from '@progress/kendo-angular-grid';
import { PatientGridComponent } from './patient-grid/patient-grid.component'
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PatientDocumentPageComponent } from './patient-document-page/patient-document-page.component';
import { PatientToothChartComponent } from './patient-tooth-chart/patient-tooth-chart.component';
import { ToothItemComponent } from './patient-tooth-chart/tooth-item/tooth-item.component';
import { ToothDetailPageComponent } from './patient-tooth-chart/tooth-detail-page/tooth-detail-page.component';
import { HamtanoPanelModule } from '../hamtano-panel/hamtano-panel.module';
import { ToothWheelSelectorComponent } from './patient-tooth-chart/tooth-detail-page/tooth-wheel-selector/tooth-wheel-selector.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { AddPatientPageComponent } from './add-patient-page/add-patient-page.component';
import { HimsCommonModule } from '../hims-common/hims-common.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { PatientProfileInfComponent } from './patient-document-page/patient-profile-inf/patient-profile-inf.component';
import { PatientViewCardComponent } from './patient-document-page/patient-profile-inf/patient-view-card/patient-view-card.component';
import { PatientMedicineSelectorComponent } from './patient-document-page/patient-profile-inf/patient-medicine-selector/patient-medicine-selector.component';
import {MatCardModule} from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider';
import { ToothEndodonticSelectorComponent } from './patient-document-page/tooth-endodontic-selector/tooth-endodontic-selector.component';
import { ColdTestItemsComponent } from './patient-document-page/tooth-Endodontic-selector/cold-test-items/cold-test-items.component';
import { PercussionTestItemComponent } from './patient-document-page/tooth-Endodontic-selector/percussion-test-item/percussion-test-item.component';
import { ToothTreatmentsPartComponent } from './patient-document-page/tooth-treatments-part/tooth-treatments-part.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToothPatalogyPageComponent } from './patient-document-page/tooth-patalogy-page/tooth-patalogy-page.component';
import { PatalogyItemsDetailComponent } from './patient-document-page/tooth-patalogy-page/patalogy-items-detail/patalogy-items-detail.component';
import { ToothTreatmentPlaneComponent } from './patient-tooth-chart/tooth-detail-page/tooth-treatment-plane/tooth-treatment-plane.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PatientDocumentBaseData } from './data/patient-document-base-data';
import { AgGridAngular } from 'ag-grid-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PatientScheduleDialogComponent } from './patient-schedule-dialog/patient-schedule-dialog.component';
import { AngularSplitModule } from 'angular-split';
import { TimeLineItemComponent } from './patient-schedule-dialog/time-line-item/time-line-item.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    PatientGridComponent,
    PatientDocumentPageComponent,
    PatientToothChartComponent,
    ToothItemComponent,
    ToothDetailPageComponent,
    ToothWheelSelectorComponent,
    AddPatientPageComponent,
    PatientProfileInfComponent,
    PatientViewCardComponent,
    PatientMedicineSelectorComponent,
    ToothEndodonticSelectorComponent,
    ColdTestItemsComponent,
    PercussionTestItemComponent,
    ToothTreatmentsPartComponent,
    ToothPatalogyPageComponent,
    PatalogyItemsDetailComponent,
    ToothTreatmentPlaneComponent,
    PatientScheduleDialogComponent,
    TimeLineItemComponent,
  ],
  imports: [
    CommonModule,
    HamtanoPatientRoutingModule,
    GridModule,
    HttpClientModule,
    MatButtonModule,
    MatSidenavModule,
    HamtanoPanelModule,
    MatBottomSheetModule,
    HimsCommonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
    MatCardModule,
    MatDividerModule,
    SweetAlert2Module,
    MatTabsModule,
    AgGridAngular,
    MatFormFieldModule,
    MatSelectModule,
    AngularSplitModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule
  ],
  exports:[
    PatientGridComponent
  ],
  providers:[
    PatientDocumentBaseData
  ]
})
export class HamtanoPatientModule { }
