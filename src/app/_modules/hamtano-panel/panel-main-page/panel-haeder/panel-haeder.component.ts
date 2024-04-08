import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'panel-haeder',
  templateUrl: './panel-haeder.component.html',
  styleUrls: ['./panel-haeder.component.css']
})
export class PanelHaederComponent {

  public onOpenSideNave() {
    this.openSidenavEvent.emit();
  }

  @Output() public openSidenavEvent = new EventEmitter();
}
