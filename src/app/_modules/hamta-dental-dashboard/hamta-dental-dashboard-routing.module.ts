import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMainPageComponent } from './dashboard-main-page/dashboard-main-page.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardMainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HamtaDentalDashboardRoutingModule { }
