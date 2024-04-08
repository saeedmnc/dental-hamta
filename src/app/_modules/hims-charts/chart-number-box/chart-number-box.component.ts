import { Component, Input } from '@angular/core';
import { ChartDataEntity } from 'src/app/interfaces/chart/chart-data-entity';
import { BaseDataEntity } from 'src/app/interfaces/data/base-data-entity';

@Component({
  selector: 'chart-number-box',
  templateUrl: './chart-number-box.component.html',
  styleUrls: ['./chart-number-box.component.css']
})
export class ChartNumberBoxComponent {
  @Input() chartData!: ChartDataEntity[];
}
