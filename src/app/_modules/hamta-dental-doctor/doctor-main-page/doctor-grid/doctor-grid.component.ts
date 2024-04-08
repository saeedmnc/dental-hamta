import { Component, OnInit } from '@angular/core';
import { DoctorEntity } from 'src/app/interfaces/dr/doctor-entity';
import { HamtaSettings } from 'src/app/repository/hamtano-settings';
import { ServiceResultWrapperUtility } from 'src/app/utility/service-result-wrapper-utility';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'doctor-grid',
  templateUrl: './doctor-grid.component.html',
  styleUrls: ['./doctor-grid.component.css']
})
export class DoctorGridComponent implements OnInit {
  constructor(
    public serviceWrapper: ServiceResultWrapperUtility,
    public settings: HamtaSettings,
    public doctorService: DoctorService
  ) { }
  ngOnInit(): void {
    this.settings.getJSON().subscribe(r => {
      this.settings.serverUrl = r.serviceAddress;
      this.getDoctors();
    });
  }
  public async getDoctors() {
    this.isBusy = true;
    this.doctors = await this.serviceWrapper.parse(this.doctorService.getDoctors()) as DoctorEntity[];
    this.isBusy = false;
  }
  public doctors: DoctorEntity[] = [];
  public isBusy: boolean = false
}
