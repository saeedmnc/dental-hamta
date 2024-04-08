import { Component, Input } from '@angular/core';
import { ToothEntity } from 'src/app/interfaces/tooth/tooth-entity';

@Component({
  selector: 'tooth-wheel-selector',
  templateUrl: './tooth-wheel-selector.component.html',
  styleUrls: ['./tooth-wheel-selector.component.css']
})
export class ToothWheelSelectorComponent {
  constructor(){

  }
  @Input() public tooth!: ToothEntity;
}
