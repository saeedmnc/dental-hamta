import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceMainPageComponent } from './service-main-page/service-main-page.component';

const routes: Routes = [
  {
    path:'',
    component:ServiceMainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HamtanoServiceRoutingModule { }
