import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CacheDataUtility } from 'src/app/caches/cache-data-utility';
import { PatientToothDocumentEntity } from 'src/app/interfaces/patient/patient-tooth-document-entity';
import { ToothPatalogyEntity } from 'src/app/interfaces/patient/tooth-patalogy-entity';

@Component({
  selector: 'tooth-patalogy-page',
  templateUrl: './tooth-patalogy-page.component.html',
  styleUrls: ['./tooth-patalogy-page.component.css']
})
export class ToothPatalogyPageComponent {
  constructor(
    public cacheData: CacheDataUtility
  ) {
    this.toothPatalogy = <ToothPatalogyEntity>{};
  }

  public onClose() {
    this.closeEvent.emit();
  }

  public onManitoringItem() {
    this.toothPatalogy.status = 1;
    this.onSave();
  }

  public onTreat() {
    this.toothPatalogy.status = 2;
    this.onSave();
  }

  public onSave() {
    if (!this.toothDoc.patalogy || this.toothDoc.patalogy.length == 0) {
      this.toothDoc.patalogy = [];
    }
    this.toothPatalogy.toothNom = this.cacheData.selectedTooth.toothNum;
    this.toothDoc.patalogy.push(this.toothPatalogy);
    this.onClose();
  }

  public selectedItem!: number;
  @Input() public viewMode!: string;
  @Input() public toothDoc!: PatientToothDocumentEntity;
  @Output() public closeEvent = new EventEmitter();
  @Input() public toothPatalogy: ToothPatalogyEntity
}
