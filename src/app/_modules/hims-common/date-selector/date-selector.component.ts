import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseDataEntity } from 'src/app/interfaces/data/base-data-entity';
// import { DateEntity } from 'src/app/interfaces/date/date-entity';

@Component({
  selector: 'date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css']
})
export class DateSelectorComponent  {
  // constructor() {
  //   this.dateFilter = <DateSelectorEntity>{};
  // }
  // ngOnInit(): void {
  //   this.initData();
  // }

  // public onChangeDate(value: number) {
  //   if (this.dateFilter.dateType == 2) {
  //     this.dateFilter.mounth = value.toString();
  //   }
  //   this.filterEvent.emit(this.dateFilter);
  // }

  // public initData() {
  //   this.dateList.push(<BaseDataEntity>{ name: 'سال جاری', code: 1 });
  //   this.dateList.push(<BaseDataEntity>{ name: 'ماه مشخص', code: 2 });
  //   this.dateList.push(<BaseDataEntity>{ name: 'بازه زمانی', code: 3 });
  //   this.mounthList.push(<BaseDataEntity>{ name: 'فروردین', code: 1 });
  //   this.mounthList.push(<BaseDataEntity>{ name: 'اردیبهشت', code: 2 });
  //   this.mounthList.push(<BaseDataEntity>{ name: 'خرداد', code: 3 });
  //   this.mounthList.push(<BaseDataEntity>{ name: 'تیر', code: 4 });
  //   this.mounthList.push(<BaseDataEntity>{ name: 'مرداد', code: 5 });
  //   this.mounthList.push(<BaseDataEntity>{ name: 'شهریور', code: 6 });
  //   this.mounthList.push(<BaseDataEntity>{ name: 'مهر', code: 7 });
  //   this.mounthList.push(<BaseDataEntity>{ name: 'آبان', code: 8 });
  //   this.mounthList.push(<BaseDataEntity>{ name: 'آذر', code: 9 });
  //   this.mounthList.push(<BaseDataEntity>{ name: 'دی', code: 10 });
  //   this.mounthList.push(<BaseDataEntity>{ name: 'بهمن', code: 11 });
  //   this.mounthList.push(<BaseDataEntity>{ name: 'اسفند', code: 12 });
  // }

  // public dateList: BaseDataEntity[] = [];
  // public mounthList: BaseDataEntity[] = [];
  // public dateFilter: DateSelectorEntity;
  // @Output() public filterEvent = new EventEmitter<DateSelectorEntity>();

}
