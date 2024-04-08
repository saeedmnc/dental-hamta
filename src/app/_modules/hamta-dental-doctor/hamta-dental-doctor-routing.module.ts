import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorMainPageComponent } from './doctor-main-page/doctor-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorMainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HamtaDentalDoctorRoutingModule { }
