import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseDateData } from 'src/app/_modules/base-data/base-date-data';
import { CacheDataUtility } from 'src/app/caches/cache-data-utility';
import { ScheduleEntity } from 'src/app/ineterfaces/schedule/schedule-entity';

@Component({
  selector: 'doctor-schedule-selector',
  templateUrl: './doctor-schedule-selector.component.html',
  styleUrls: ['./doctor-schedule-selector.component.css']
})
export class DoctorScheduleSelectorComponent {
  constructor(
    public cacheData: CacheDataUtility,
    public baseData: BaseDateData
  ) { }

  public onSelectedScheculeType() {
    if (this.selectedScheduleType == 0) {
      this.selectedScheduleType = 1;
    }
    else {
      this.selectedScheduleType = 0
    }
  }


  public onCancel() {
    this.isCancelScheduleEvent.emit();
  }
  public onSelectedDay(value: ScheduleEntity[]) {
    this.doctorSchedule = value;
    this.doctroScheduleEvent.emit(this.doctorSchedule);
  }

  @Input() public doctorSchedule!: ScheduleEntity[];
  @Input() doctorCode!: number;
  @Output() public doctroScheduleEvent = new EventEmitter<ScheduleEntity[]>();
  @Output() public isCancelScheduleEvent = new EventEmitter();
  public selectedScheduleType: number = 0;
  public scheudleDayType: number = 1;
}
