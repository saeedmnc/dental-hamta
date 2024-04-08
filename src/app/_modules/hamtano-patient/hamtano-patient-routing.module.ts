import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientGridComponent } from './patient-grid/patient-grid.component';
import { PatientDocumentPageComponent } from './patient-document-page/patient-document-page.component';
import { PatientToothChartComponent } from './patient-tooth-chart/patient-tooth-chart.component';
import { AddPatientPageComponent } from './add-patient-page/add-patient-page.component';
import { PatientProfileInfComponent } from './patient-document-page/patient-profile-inf/patient-profile-inf.component';

const routes: Routes = [
  {
    path: 'list',
    component: PatientGridComponent
  },
  {
    path: 'new-patient',
    component: AddPatientPageComponent
  },
  {
    path: 'document',
    component: PatientDocumentPageComponent,
    children: [
      {
        path: 'chart',
        component: PatientToothChartComponent
      },
      {
        path: 'profile',
        component: PatientProfileInfComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HamtanoPatientRoutingModule { }
