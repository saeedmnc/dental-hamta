import { Component, Input } from '@angular/core';
import { ToothEntity } from 'src/app/interfaces/tooth/tooth-entity';

@Component({
  selector: 'tooth-item',
  templateUrl: './tooth-item.component.html',
  styleUrls: ['./tooth-item.component.css']
})
export class ToothItemComponent {



  @Input() public toothImg!: string;
  @Input() public tooth!: ToothEntity;
  @Input() public isUpperJaw: boolean = true;
}
