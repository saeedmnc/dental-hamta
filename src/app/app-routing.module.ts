import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './main-page/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'main',
    loadChildren: () => import('../app/_modules/hamtano-panel/hamtano-panel.module').then(m => m.HamtanoPanelModule),
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
