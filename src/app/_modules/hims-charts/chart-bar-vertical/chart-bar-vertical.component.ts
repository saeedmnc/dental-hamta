import { Component, Input } from '@angular/core';
import { ChartDataEntity } from 'src/app/interfaces/chart/chart-data-entity';

@Component({
  selector: 'chart-bar-vertical',
  templateUrl: './chart-bar-vertical.component.html',
  styleUrls: ['./chart-bar-vertical.component.css']
})
export class ChartBarVerticalComponent {
  constructor() {
  }

  ngOnInit(): void {
  }

  public setView() {

  }

  shuffleArray() {
    var m = this.colorScheme.domain.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = this.colorScheme.domain[m];
      this.colorScheme.domain[m] = this.colorScheme.domain[i];
      this.colorScheme.domain[i] = t;
    }
    return this.colorScheme;
  }


  @Input() public cahrtData: ChartDataEntity[] = [];
  @Input() view: [number, number] = [380, 250];
  // @Input() colorScheme: any = {
  //   domain: ['#775ffd','#84d9fe','#e7edf9','#6ad2fe']
  // };
  @Input() colorScheme: any = {
    domain: ['#7a76e5', '#f77fbe', '#00c5cd', '#ffdcdb', '#a0b9ff', '#0e9cef', '#f2e5d5', '#dab79f', '#010048']
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
