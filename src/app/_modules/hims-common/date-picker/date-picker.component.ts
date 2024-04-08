import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges() {
    if (this.value) {
      this.dateValue.setValue(this.value);
    }
  }

  public checkValidDate(): boolean {
    if (this.maxDate) {
      let dateSplit = this.maxDate.split('/');
      if (dateSplit[0] > this.dateValue.value.split('/')[0]) {
        return false;
      }

      else {
        return true;
      }
    }
    else {
      return true;
    }
  }
  onChangeData() {
    if (this.dateValue.value) {
      this.dateValueEvent.emit(this.dateValue.value);
      this.isMandatory = false;
    }
  }

  // public getMaxDate() {
  //   return Jalali.parse(this.maxDate).valueOf();
  // }

  public onBlur() {
    if (this.checkValidDate()) {
      this.dateValue.setValue(this.maxDate);
    }
    this.blurEvent.emit();
  }



  @Input() public dateValue = new FormControl();
  public mask = {
    guide: true,
    showMask: true,
    mask: [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/]
  };

  // public mask = 
  public date: string = "";
  @Input() public isMandatory: boolean = false;
  @Input() public timeEnable: boolean = false;
  @Input() public timeShowSecond: boolean = false;
  @Input() public caption: string = "";
  @Output() public dateValueEvent = new EventEmitter<string>();
  @Input() public maxDate!: string;
  @Output() public blurEvent = new EventEmitter();
  @Input() public value!: string;
  @Input() public isCaptionHoriz:boolean=false;
}
