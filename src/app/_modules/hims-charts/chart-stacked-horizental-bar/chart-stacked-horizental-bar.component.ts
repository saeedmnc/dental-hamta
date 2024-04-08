import { Component, Input } from '@angular/core';
import { ChartLineDataEntity } from 'src/app/interfaces/chart/chart-line-data-entity';

@Component({
  selector: 'chart-stacked-horizental-bar',
  templateUrl: './chart-stacked-horizental-bar.component.html',
  styleUrls: ['./chart-stacked-horizental-bar.component.css']
})
export class ChartStackedHorizentalBarComponent {
  constructor() {
  }

  ngOnInit(): void {

  }

  public setView() {

  }


  @Input() public cahrtData: ChartLineDataEntity[] = [];
  @Input() view: [number, number] = [380, 250];
  @Input() colorScheme: any = {
    domain: ['#775ffd','#84d9fe','#e7edf9','#6ad2fe']
  };
  @Input() showXAxis: boolean = true;
  @Input() showYAxis: boolean = true;
  @Input() gradient: boolean = false;
  @Input() showLegend: boolean = false;
  @Input() showXAxisLabel: boolean = false;
  @Input() yAxisLabel: string = '';
  @Input() showYAxisLabel: boolean = false;
  @Input() xAxisLabel: string = '';
  @Input() animations: boolean = true;
}
