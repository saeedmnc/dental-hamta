import { Component, Input } from '@angular/core';
import { ChartDataEntity } from 'src/app/interfaces/chart/chart-data-entity';
import { BaseDataEntity } from 'src/app/interfaces/data/base-data-entity';

@Component({
  selector: 'number-card-item',
  templateUrl: './chart-number-card-item.component.html',
  styleUrls: ['./chart-number-card-item.component.css']
})
export class ChartNumberCardItemComponent {


  @Input() public item!:ChartDataEntity;
  @Input() public icon!:string
}
