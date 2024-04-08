import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.css']
})
export class LoadingButtonComponent {
  @Input() public isWhite: boolean = true;

}
