import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HamtanoServiceRoutingModule } from './hamtano-service-routing.module';
import { ServiceMainPageComponent } from './service-main-page/service-main-page.component';
import { HamtanoPanelModule } from '../hamtano-panel/hamtano-panel.module';

import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AddNewServiceComponent } from './add-new-service/add-new-service.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { HimsCommonModule } from '../hims-common/hims-common.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddNewServiceItemComponent } from './add-new-service-item/add-new-service-item.component';
import { ServicesGridComponent } from './services-grid/services-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
@NgModule({
  declarations: [
    ServiceMainPageComponent,
    AddNewServiceComponent,
    AddNewServiceItemComponent,
    ServicesGridComponent
  ],
  imports: [
    CommonModule,
    HamtanoServiceRoutingModule,
    HamtanoPanelModule,
    TreeViewModule,
    MatCardModule,
    MatButtonModule,
    MatBottomSheetModule,
    HimsCommonModule,
    MatTooltipModule,
    GridModule
  ]
})
export class HamtanoServiceModule { }
