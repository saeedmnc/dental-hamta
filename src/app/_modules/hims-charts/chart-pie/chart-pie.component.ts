import { Component, Input } from '@angular/core';
import { ChartDataEntity } from 'src/app/interfaces/chart/chart-data-entity';

@Component({
  selector: 'chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.css']
})
export class ChartPieComponent {
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
  // options
  @Input() gradient: boolean = false;
  @Input() showLegend: boolean = false;
  @Input() showLabels: boolean = false;
  @Input() isDoughnut: boolean = true;
  @Input() public cahrtData: ChartDataEntity[] = [];
  @Input() view: [number, number] = [380, 250];
  @Input() colorScheme: any = {
    domain: ['#7a76e5', '#f77fbe', '#00c5cd', '#ffdcdb', '#a0b9ff', '#0e9cef', '#f2e5d5', '#dab79f', '#010048']
  };
  @Input() animations: boolean = true;
  @Input() public explodeSlices: boolean = false;
}
