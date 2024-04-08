import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientScheduleEntity } from 'src/app/interfaces/patient/patient-schedule-entity';
import { PatientEntity } from 'src/app/interfaces/patients/patient-entity';
import { ServiceResultEntity } from 'src/app/interfaces/service-result-entity';
import { HamtaSettings } from 'src/app/repository/hamtano-settings';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(public settings: HamtaSettings,
    public http: HttpClient
  ) { }

  public getPatient(): Observable<ServiceResultEntity> {
    let url = `${this.settings.serverUrl}/api/Adm/getAdmList`;
    return this.http.get<ServiceResultEntity>(url, this.settings.httpOptions);
  }

  public savePatient(patient: PatientEntity): Observable<ServiceResultEntity> {
    let url = `${this.settings.serverUrl}/api/Adm/createAdm`;
    let json = JSON.stringify(patient);
    return this.http.post<ServiceResultEntity>(url, json, this.settings.httpOptions);
  }

  public savePatientSchedule(scheudle: PatientScheduleEntity): Observable<ServiceResultEntity> {
    let url = `${this.settings.serverUrl}/api/Patient/createPatientSchedule`;
    let json = JSON.stringify(scheudle);
    return this.http.post<ServiceResultEntity>(url, json, this.settings.httpOptions);
  }
 
}
