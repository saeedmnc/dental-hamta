import { Component, Input } from '@angular/core';

@Component({
  selector: 'hims-data-empty',
  templateUrl: './hims-data-empty.component.html',
  styleUrls: ['./hims-data-empty.component.css']
})
export class HimsDataEmptyComponent {


@Input() public message!:string;
}

