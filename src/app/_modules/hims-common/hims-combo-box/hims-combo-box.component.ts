import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseDataEntity } from 'src/app/interfaces/data/base-data-entity';

@Component({
  selector: 'hims-combo-box',
  templateUrl: './hims-combo-box.component.html',
  styleUrls: ['./hims-combo-box.component.css']
})
export class HimsComboBoxComponent {

  public onChange() {
    this.valueChangeEvent.emit(this.value);
  }

  @Input() public dataSource!: BaseDataEntity[];
  @Input() public caption!: string;
  @Input() public value!: number;
  @Output() public valueChangeEvent = new EventEmitter<number>();
  @Input() public isCaptionHoriz: boolean = false;
  @Input() public isHideCaption: boolean = false;
  @Input() public placeHolder: string = '';
  @Input() public isMultiSelect: boolean = false;
}
