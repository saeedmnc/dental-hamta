import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CacheDataUtility } from 'src/app/caches/cache-data-utility';
import { PatientToothDocumentEntity } from 'src/app/interfaces/patient/patient-tooth-document-entity';
import { ToothPatalogyEntity } from 'src/app/interfaces/patient/tooth-patalogy-entity';
import { ToothEntity } from 'src/app/interfaces/tooth/tooth-entity';

@Component({
  selector: 'tooth-detail-page',
  templateUrl: './tooth-detail-page.component.html',
  styleUrls: ['./tooth-detail-page.component.css']
})
export class ToothDetailPageComponent {
  constructor(
    public cacheData: CacheDataUtility
  ) {
    this.toothDoc = <PatientToothDocumentEntity>{};
    this.toothPatalogy = <ToothPatalogyEntity>{};
  }

  public onClose() {
    this.closeEvent.emit();
  }

  public onselectedTreat(treat: number) {
    this.selectedTreat = treat;
    this.isOpen = true;
    this.viewMode = '';
    this.toothPatalogy = <ToothPatalogyEntity>{};

  }

  public onSelectedTooth(item: number) {
    let findTooth = this.cacheData.toothList.find(r => r.toothNum == item);
    if (findTooth) {
      this.cacheData.selectedTooth = findTooth;
      this.tooth.toothNum = findTooth.toothNum;
    }
  }

  public teethList: number[] = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28, 38, 37, 36, 35, 34, 33, 32, 31, 41, 42, 43, 44, 45, 46, 47, 48]
  @Input() public tooth!: ToothEntity;
  public selectedItem!: number;
  public isOpen: boolean = false;
  public selectedTreat!: number;
  @Output() public closeEvent = new EventEmitter();
  public toothDoc: PatientToothDocumentEntity;
  public toothPatalogy: ToothPatalogyEntity;
  @Input() public viewMode!: string;
}
