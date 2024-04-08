import { Component, Input } from '@angular/core';
import { ChartDataEntity } from 'src/app/interfaces/chart/chart-data-entity';

@Component({
  selector: 'chart-tree',
  templateUrl: './chart-tree.component.html',
  styleUrls: ['./chart-tree.component.css']
})
export class ChartTreeComponent {
  gradient: boolean = false;
  animations: boolean = true;
  @Input() view: [number, number] = [700, 400];
  @Input() colorScheme: any = {
    domain: ['#775ffd', '#84d9fe', '#e7edf9', '#6ad2fe']
  };
  @Input() public chartData: ChartDataEntity[] = [];
}
