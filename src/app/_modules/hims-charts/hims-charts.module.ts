import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule, PieChartComponent } from '@swimlane/ngx-charts';
import { ChartBarHorizentalComponent } from './chart-bar-horizental/chart-bar-horizental.component';
import { ChartPreviewComponent } from './chart-preview/chart-preview.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HimsChartsRoutingModule } from './hims-charts-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { HimsCommonModule } from '../hims-common/hims-common.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ChartItemCardComponent } from './chart-item-card/chart-item-card.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatMenuModule } from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { ChartBaseData } from './utility/chart-base-data';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { ChartBarVerticalComponent } from './chart-bar-vertical/chart-bar-vertical.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ChartPieGridComponent } from './chart-pie-grid/chart-pie-grid.component';
import { ChartGaugeComponent } from './chart-gauge/chart-gauge.component';
import { ChartPieAdvanceComponent } from './chart-pie-advance/chart-pie-advance.component';
import { ChartNumberBoxComponent } from './chart-number-box/chart-number-box.component';
import { ChartNumberCardItemComponent } from './chart-number-box/chart-number-card-item/chart-number-card-item.component';
import { ChartDegreeComponent } from './chart-degree/chart-degree.component';
import { ChartLineComponent } from './chart-line/chart-line.component';
import { ChartLineAreaComponent } from './chart-line-area/chart-line-area.component';
import { ChartTreeComponent } from './chart-tree/chart-tree.component';
import { ChartStackedHorizentalBarComponent } from './chart-stacked-horizental-bar/chart-stacked-horizental-bar.component';
@NgModule({
  declarations: [
    ChartBarHorizentalComponent,
    ChartPreviewComponent,
    ChartItemCardComponent,
    ChartPieComponent,
    ChartBarVerticalComponent,
    ChartPieGridComponent,
    ChartGaugeComponent,
    ChartPieAdvanceComponent,
    ChartNumberBoxComponent,
    ChartNumberCardItemComponent,
    ChartDegreeComponent,
    ChartLineComponent,
    ChartLineAreaComponent,
    ChartTreeComponent,
    ChartStackedHorizentalBarComponent
  ],
  imports: [
    CommonModule,
    HimsChartsRoutingModule,
    NgxChartsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    HimsCommonModule,
    DragDropModule,
    CdkAccordionModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatSlideToggleModule,
    FormsModule,
    MatTooltipModule,
    // NgxCaptureModule,
    // NgxPrintModule
  ],
  exports: [
    ChartBarHorizentalComponent,
    ChartPreviewComponent,
    ChartDegreeComponent,
    PieChartComponent,
    ChartPieComponent,
    ChartLineComponent,
    ChartLineAreaComponent,
    ChartBarVerticalComponent,
    ChartTreeComponent,
    ChartStackedHorizentalBarComponent,
    ChartNumberBoxComponent
  ],
  providers:[
    ChartBaseData
  ]
})
export class HimsChartsModule { }
