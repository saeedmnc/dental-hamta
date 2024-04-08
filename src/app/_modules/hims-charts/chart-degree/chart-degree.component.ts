import { Component, Input } from '@angular/core';

@Component({
  selector: 'chart-degree',
  templateUrl: './chart-degree.component.html',
  styleUrls: ['./chart-degree.component.css']
})
export class ChartDegreeComponent {



  @Input() public value!:number;
}
