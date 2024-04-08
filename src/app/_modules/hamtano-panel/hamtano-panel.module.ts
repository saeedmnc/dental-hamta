import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HamtanoPanelRoutingModule } from './hamtano-panel-routing.module';
import { PanelLoginComponent } from './panel-login/panel-login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { PanelMainPageComponent } from './panel-main-page/panel-main-page.component'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideNavComponent } from './panel-main-page/side-nav/side-nav.component';
import { SideNavItemComponent } from './panel-main-page/side-nav/side-nav-item/side-nav-item.component';
import { PanelHaederComponent } from './panel-main-page/panel-haeder/panel-haeder.component';

@NgModule({
  declarations: [
    PanelLoginComponent,
    PanelMainPageComponent,
    SideNavComponent,
    SideNavItemComponent,
    PanelHaederComponent
  ],
  imports: [
    CommonModule,
    HamtanoPanelRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule
  ],
  exports:[
    PanelHaederComponent
  ]
})
export class HamtanoPanelModule { }
