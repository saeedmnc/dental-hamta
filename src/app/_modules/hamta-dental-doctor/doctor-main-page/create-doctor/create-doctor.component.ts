import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CacheDataUtility } from 'src/app/caches/cache-data-utility';
import { ScheduleEntity } from 'src/app/ineterfaces/schedule/schedule-entity';
import { DoctorEntity } from 'src/app/interfaces/dr/doctor-entity';

@Component({
  selector: 'create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {
  constructor(
    public cacheData: CacheDataUtility
  ) {
  }

  ngOnInit(): void {

  }

  public onOpenScheudle() {
    if (this.isOpenSchedule) {
      this.isOpenSchedule = false;
    }
    else if (!this.isOpenSchedule) {
      this.isOpenSchedule = true;
    }
    this.isOpenScheduleEvent.emit(this.isOpenSchedule);
  }

  public onAddNewDoctor() {
    this.doctor = <DoctorEntity>{};
    this.doctorSchedule = <ScheduleEntity>{};
  }

  public onSave() {
    this.saveEvent.emit();
  }

  public onAddSchedule() {
    this.doctorSchedule.scheduleTime = this.startTime + '-' + this.finishTime;
    this.doctorSchedule.scheduleDayName = "";
    this.doctorsSchedules.push(this.doctorSchedule);
    this.doctor.schedules = this.doctorsSchedules;
    this.doctorSchedule = <ScheduleEntity>{};
  }
  @Input() public doctor!: DoctorEntity;
  @Input() public doctorSchedule!: ScheduleEntity;
  @Input() public doctorsSchedules: ScheduleEntity[] = [];
  @Input() public startTime: string = "";
  @Input() public finishTime: string = "";
  @Output() public saveEvent = new EventEmitter();
  @Output() public isOpenScheduleEvent = new EventEmitter<boolean>();
  public isOpenSchedule: boolean = false;
}
