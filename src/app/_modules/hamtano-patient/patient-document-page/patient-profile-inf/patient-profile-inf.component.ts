import { Component, Input } from '@angular/core';
import { CacheDataUtility } from 'src/app/caches/cache-data-utility';
import { PatientEntity } from 'src/app/interfaces/patients/patient-entity';

@Component({
  selector: 'app-patient-profile-inf',
  templateUrl: './patient-profile-inf.component.html',
  styleUrls: ['./patient-profile-inf.component.css']
})
export class PatientProfileInfComponent {

  constructor(
    public cacheData:CacheDataUtility
  ) {
    this.patient = <PatientEntity>{};
  }

  @Input() public patient: PatientEntity;
}
