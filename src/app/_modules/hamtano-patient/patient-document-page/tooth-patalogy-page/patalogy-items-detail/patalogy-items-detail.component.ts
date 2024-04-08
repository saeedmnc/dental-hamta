import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PatientToothDocumentEntity } from 'src/app/interfaces/patient/patient-tooth-document-entity';
import { ToothPatalogyEntity } from 'src/app/interfaces/patient/tooth-patalogy-entity';
import { PatientDocumentBaseData } from '../../../data/patient-document-base-data';
import { BaseDataEntity } from 'src/app/interfaces/data/base-data-entity';

@Component({
  selector: 'patalogy-items-detail',
  templateUrl: './patalogy-items-detail.component.html',
  styleUrls: ['./patalogy-items-detail.component.css']
})
export class PatalogyItemsDetailComponent {
  constructor(
    public patologyBaseData: PatientDocumentBaseData
  ) {
  }

  public onSelectedChange(serviceName: string, value: BaseDataEntity) {
    this.toothPatalogy.name = serviceName;
    this.toothPatalogy.code = value.code;
    this.seletcedEvent.emit(this.toothPatalogy);
  }

  @Input() public selectedItem!: number;
  @Input() public viewMode!: string;
  @Input() public toothPatalogy!: ToothPatalogyEntity;
  @Output() public seletcedEvent = new EventEmitter<ToothPatalogyEntity>();
}
