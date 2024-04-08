import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseDateData } from '../../base-data/base-date-data';
import { CacheDataUtility } from 'src/app/caches/cache-data-utility';
import { ScheduleEntity } from 'src/app/ineterfaces/schedule/schedule-entity';

@Component({
  selector: 'hamta-persian-calender',
  templateUrl: './hamta-persian-calender.component.html',
  styleUrls: ['./hamta-persian-calender.component.css']
})
export class HamtaPersianCalenderComponent implements OnInit {
  constructor(
    public cacheData: CacheDataUtility,
    public baseData: BaseDateData
  ) {
    // this.selectedMonthName = .cacheData.today.monthOfYearNameJalali;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.selectedDay = this.cacheData.today.dayOfMonthJalali;
      this.selectedMonthName = this.cacheData.today.monthOfYearNameJalali;
      this.selectedMonth = this.cacheData.today.monthOfYearJalali;
    }, 500);
  }

  public getDayes() {
    let dayes = [];
    if (this.cacheData.today && this.cacheData.today.monthOfYearJalali < 7) {
      for (let i = 1; i < 31; i++) {
        dayes.push(i);
      }
    }
    if (this.cacheData.today && this.cacheData.today.monthOfYearJalali > 7) {
      for (let i = 1; i < 30; i++) {
        dayes.push(i);
      }
    }
    return dayes
  }
  public onSelectedDay(day: number) {
    this.selectedDay = day;
    this.shiftType = 0;
    this.scheduleDate = this.cacheData.today.yearNameJalali + '/' + this.cacheData.today.monthOfYearJalali + '/' + this.selectedDay;
    if (this.scheduels) {
      this.scheduels.forEach(schedule => {
        if (schedule.scheduleDate == this.scheduleDate) {
          this.shiftType = schedule.shiftType;
        }
      });
    }
    // this.selectedDayEvent.emit(str);
  }

  public onSelectedPatientScheduleDay(day: number) {
    this.selectedDay = day;
    this.scheduleDate = this.cacheData.today.yearNameJalali + '/' + this.cacheData.today.monthOfYearJalali + '/' + this.selectedDay;
    let selectedScheudle = this.scheduels.find(r => r.scheduleDate == this.scheduleDate);
    this.selectedPatientScheudle.emit(selectedScheudle);
  }

  public onSlectedShift(code: number) {
    let schedule = <ScheduleEntity>{};
    schedule.shiftType = code;
    schedule.scheduleDate = this.scheduleDate;
    schedule.drCode = this.doctorCode;
    schedule.scheduleTime = "";
    schedule.scheduleDayName = "";
    if (!this.scheduels) {
      this.scheduels = [];
    }
    this.scheduels.push(schedule);
    this.selectedDayEvent.emit(this.scheduels);

  }

  public checkScheduleDr(day: number) {
    let result = false;
    if (this.scheduels) {
      this.scheduels.forEach(r => {
        let scheduleDate = r.scheduleDate;
        let scheduleArray = scheduleDate.split('/');
        if (+scheduleArray[2] == day) {
          result = true;
        }
      });
    }
    return result;
  }

  public selectedDay!: number;
  public selectedMonth!: number;
  public selectedMonthName: string = "";
  public shiftType!: number;
  public scheduleDate: string = "";
  @Input() doctorCode!: number;
  @Output() public selectedDayEvent = new EventEmitter<ScheduleEntity[]>();
  @Output() public selectedPatientScheudle = new EventEmitter<ScheduleEntity>();
  @Input() public scheduels!: ScheduleEntity[];
  @Input() public mode: string = "doctor";
}
