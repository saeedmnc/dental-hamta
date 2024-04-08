import { Component, Input } from '@angular/core';
import { ChartDataEntity } from 'src/app/interfaces/chart/chart-data-entity';

@Component({
  selector: 'chart-gauge',
  templateUrl: './chart-gauge.component.html',
  styleUrls: ['./chart-gauge.component.css']
})
export class ChartGaugeComponent {

  @Input() public cahrtData: ChartDataEntity[] = [];
  @Input() view: [number, number] = [380, 250];
  @Input() colorScheme: any = {
    domain: ['#a8395d', '#b2ebf2', '#7fdeea', '#4cd0e1', '#25c6da', '#00bcd4']
  };
  @Input() legend: boolean = false;
  @Input() legendPosition: string = 'below';
}
