import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CacheDataUtility } from 'src/app/caches/cache-data-utility';
import { ScheduleEntity } from 'src/app/ineterfaces/schedule/schedule-entity';
import { ShiftTypeEntity } from 'src/app/interfaces/data/shift-type-entity';
import { HamtaSettings } from 'src/app/repository/hamtano-settings';
import { BaseDataService } from 'src/app/services/base-data.service';
import { ServiceResultWrapperUtility } from 'src/app/utility/service-result-wrapper-utility';

@Component({
  selector: 'patient-schedule-dialog',
  templateUrl: './patient-schedule-dialog.component.html',
  styleUrls: ['./patient-schedule-dialog.component.css']
})
export class PatientScheduleDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public doctorSchedule: ScheduleEntity,
    public cacheData: CacheDataUtility,
    public settings: HamtaSettings,
    public serviceWrapper: ServiceResultWrapperUtility,
    public baseDataService: BaseDataService,
    public dialogRef: MatDialogRef<PatientScheduleDialogComponent>,

  ) { }


  ngOnInit(): void {
    this.settings.getJSON().subscribe(r => {
      this.settings.serverUrl = r.serviceAddress;
      this.getShiftTypeList();
    });
  }

  public async getShiftTypeList() {
    this.shiftTypeList = await this.serviceWrapper.parse(this.baseDataService.getShiftTypeList()) as ShiftTypeEntity[];
    this.cacheData.shiftListValue = this.shiftTypeList;
  }
  public onSelectedTime() {
    // this.selectedTime = value;
  }

  public onSubmit() {
    console.log(this.selectedTime);
    this.dialogRef.close({ value: this.selectedTime })
  }

  @Input() public selectedTime!: number;
  public shiftTypeList: ShiftTypeEntity[] = [];
}
