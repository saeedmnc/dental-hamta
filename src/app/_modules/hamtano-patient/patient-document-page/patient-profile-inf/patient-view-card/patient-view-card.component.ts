import { Component, Input, Output } from '@angular/core';
import { PatientEntity } from 'src/app/interfaces/patients/patient-entity';

@Component({
  selector: 'patient-view-card',
  templateUrl: './patient-view-card.component.html',
  styleUrls: ['./patient-view-card.component.css']
})
export class PatientViewCardComponent {



  @Input() public patient!: PatientEntity;

  @Output() public get src(): string {
    let path = 'assets/images/person'
    if (this.patient.gender == 0) {
      return `${path}/man.svg`;
    }
    else {
      return `${path}/woman.svg`;
    }
  }
  @Output() public get fullName(): string {
    return this.patient.firstName + " " + this.patient.lastName;
  }
}
