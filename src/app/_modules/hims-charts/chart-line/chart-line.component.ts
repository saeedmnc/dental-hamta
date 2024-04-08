import { Component, Input } from '@angular/core';
import { ChartLineDataEntity } from 'src/app/interfaces/chart/chart-line-data-entity';

@Component({
  selector: 'chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.css']
})
export class ChartLineComponent {

  @Input() legend: boolean = false;
  @Input()  showLabels: boolean = false;
  @Input()  animations: boolean = false;
  @Input()   xAxis: boolean = false;
  @Input()   yAxis: boolean = false;
  @Input()  showYAxisLabel: boolean = false;
  @Input()  showXAxisLabel: boolean = false;
  @Input()  xAxisLabel: string = '';
  @Input()  yAxisLabel: string = '';
  @Input()   timeline: boolean = false;
  @Input() view: [number, number] = [380, 250];
  @Input() chartData:ChartLineDataEntity[]=[];
  @Input() colorScheme: any = {
    domain: ['#775ffd','#84d9fe','#e7edf9','#6ad2fe']
  };
}
