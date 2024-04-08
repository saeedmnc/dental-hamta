import { Component, Input } from '@angular/core';
import { ChartLineDataEntity } from 'src/app/interfaces/chart/chart-line-data-entity';

@Component({
  selector: 'chart-line-area',
  templateUrl: './chart-line-area.component.html',
  styleUrls: ['./chart-line-area.component.css']
})
export class ChartLineAreaComponent {

  @Input() public cahrtData: ChartLineDataEntity[] = [];
  @Input() view: [number, number] = [380, 250];
  @Input() colorScheme: any = {
    domain: ['#775ffd', '#84d9fe', '#e7edf9', '#6ad2fe']
  };
  @Input() legend: boolean = false;
  @Input() showLabels: boolean = true;
  @Input() animations: boolean = true;
  @Input() xAxis: boolean = true;
  @Input() yAxis: boolean = true;
  @Input() showYAxisLabel: boolean = false;
  @Input() showXAxisLabel: boolean = false;
  @Input() xAxisLabel: string = '';
  @Input() yAxisLabel: string = '';
  @Input() timeline: boolean = false;
}
