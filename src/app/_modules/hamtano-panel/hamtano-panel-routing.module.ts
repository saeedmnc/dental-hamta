import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelLoginComponent } from './panel-login/panel-login.component';
import { PanelMainPageComponent } from './panel-main-page/panel-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: PanelMainPageComponent,
    children: [
      {
        path: 'patients',
        loadChildren: () => import('../hamtano-patient/hamtano-patient.module').then(m => m.HamtanoPatientModule),
      },
      {
        path:'dashboard',
        loadChildren: () => import('../hamta-dental-dashboard/hamta-dental-dashboard.module').then(m => m.HamtaDentalDashboardModule),
      },
      {
        path:'services',
        loadChildren: () => import('../hamtano-service/hamtano-service.module').then(m => m.HamtanoServiceModule),
      },
      {
        path: 'doctor',
        loadChildren: () => import('../hamta-dental-doctor/hamta-dental-doctor.module').then(m => m.HamtaDentalDoctorModule),
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HamtanoPanelRoutingModule { }
