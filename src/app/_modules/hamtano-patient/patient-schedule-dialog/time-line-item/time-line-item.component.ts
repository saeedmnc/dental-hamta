import { Component, Input } from '@angular/core';
import { CacheDataUtility } from 'src/app/caches/cache-data-utility';

@Component({
  selector: 'time-line-item',
  templateUrl: './time-line-item.component.html',
  styleUrls: ['./time-line-item.component.css']
})
export class TimeLineItemComponent {
  constructor(
    public cacheData: CacheDataUtility
  ) { }
  public onSelectedItem(time: number) {
    if (this.isDisableSchedule) {
      this.partSelected = time;
    }
  }

  public CheckShift() {
    let timeArray = this.time.split('-');
    let result = false;
    let ShiftTimeSchedule = this.cacheData.shiftListValue.find(r => r.code == this.shiftType)?.value;
    if (ShiftTimeSchedule) {
      let arry2 = ShiftTimeSchedule.split('-');
      result = this.checkTime(timeArray[0], arry2[0], timeArray[1], arry2[1]);
    }
    this.isDisableSchedule = result;
    return result;

  }

  public onSlected() {
    this.selectedTime = this.scheduleType;
    console.log(this.selectedTime);
  }

  public checkTime(time1: string, time2: string, time3: string, time4: string) {
    let result = false;
    let time1Array = time1.split(':');
    let time2Array = time2.split(':');
    let time3Array = time3.split(':');
    let time4Array = time4.split(':');
    if ((+time1Array[0] >= (+time2Array[0])) && (+time3Array[0] <= +time4Array[0])) {
      result = true;
    }
    return result;
  }

  @Input() public time!: string;
  @Input() public selectedTime!: number;
  @Input() public scheduleType!: number;
  @Input() public shiftType!: number;
  public partSelected = 60;
  public isDisableSchedule: boolean = false;
}
