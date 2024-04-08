import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cold-test-items',
  templateUrl: './cold-test-items.component.html',
  styleUrls: ['./cold-test-items.component.css']
})
export class ColdTestItemsComponent {
  public onSelectedColdTest(code: number) {
    this.coldTestEvent.emit(code);
  }

  @Output() public coldTestEvent = new EventEmitter<number>();
}
