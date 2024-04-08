import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tooth-endodontic-selector',
  templateUrl: './tooth-endodontic-selector.component.html',
  styleUrls: ['./tooth-endodontic-selector.component.css']
})
export class ToothEndodonticSelectorComponent {
  public onSelectedItem(value: number) {
    this.selectedItemEvent.emit(value);
  }

  @Output() public selectedItemEvent = new EventEmitter<number>();
}
