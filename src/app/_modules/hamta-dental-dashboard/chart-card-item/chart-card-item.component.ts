import { Component, Input } from '@angular/core';
import { ChartDataEntity } from 'src/app/interfaces/chart/chart-data-entity';

@Component({
  selector: 'chart-card-item',
  templateUrl: './chart-card-item.component.html',
  styleUrls: ['./chart-card-item.component.css']
})
export class ChartCardItemComponent {


  @Input() public chartData: ChartDataEntity[] = [];
  @Input() public caption: string = "";
  @Input() public isBusy = false;
  @Input() public chartType!: number;
  @Input() public view: [number, number] = [300,600];
}
