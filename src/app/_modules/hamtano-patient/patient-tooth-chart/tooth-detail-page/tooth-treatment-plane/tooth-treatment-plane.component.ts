import { Component, Input } from '@angular/core';
import { PatientToothDocumentEntity } from 'src/app/interfaces/patient/patient-tooth-document-entity';
import { ToothPatalogyEntity } from 'src/app/interfaces/patient/tooth-patalogy-entity';
import { PatientDocumentBaseData } from '../../../data/patient-document-base-data';

@Component({
  selector: 'tooth-treatment-plane',
  templateUrl: './tooth-treatment-plane.component.html',
  styleUrls: ['./tooth-treatment-plane.component.css']
})
export class ToothTreatmentPlaneComponent {
  constructor(
    public patalogyBaseData:PatientDocumentBaseData
  ){}

  @Input() public toothDoc!: PatientToothDocumentEntity;
}
