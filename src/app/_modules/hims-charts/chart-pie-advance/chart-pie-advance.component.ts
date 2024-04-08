import { Component, Input } from '@angular/core';
import { ChartDataEntity } from 'src/app/interfaces/chart/chart-data-entity';

@Component({
  selector: 'chart-pie-advance',
  templateUrl: './chart-pie-advance.component.html',
  styleUrls: ['./chart-pie-advance.component.css']
})
export class ChartPieAdvanceComponent {
  @Input() gradient: boolean = false;
  @Input() isDoughnut: boolean = false;
  @Input() view: [number, number] = [380, 250];
  @Input() public showLegend: boolean = true;
  @Input() public showLabels: boolean = true;
  @Input() public cahrtData: ChartDataEntity[] = [];
  @Input() colorScheme: any = {
    domain: ['#a8395d', '#b2ebf2', '#7fdeea', '#4cd0e1', '#25c6da', '#00bcd4']
  };
}
