import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorEntity } from 'src/app/interfaces/dr/doctor-entity';
import { ServiceResultEntity } from 'src/app/interfaces/service-result-entity';
import { ServiceEntity } from 'src/app/interfaces/service/service-entity';
import { HamtaSettings } from 'src/app/repository/hamtano-settings';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(
    public settings: HamtaSettings,
    public http: HttpClient
  ) { }

  public getDoctors(): Observable<ServiceResultEntity> {
    let url = `${this.settings.serverUrl}/api/Doctor/getDoctors`;
    return this.http.get<ServiceResultEntity>(url, this.settings.httpOptions);
  }
  public saveDoctors(doctor: DoctorEntity): Observable<ServiceResultEntity> {
    let url = `${this.settings.serverUrl}/api/Doctor/createDoctor`;
    let json = JSON.stringify(doctor);
    return this.http.post<ServiceResultEntity>(url, json, this.settings.httpOptions);
  }

  public getDrExpertList(): Observable<ServiceResultEntity> {
    let url = `${this.settings.serverUrl}/api/Doctor/getDrExpertList`;
    return this.http.get<ServiceResultEntity>(url, this.settings.httpOptions);
  }

  public getDoctorSchedulesByDrCode(drCode:number):Observable<ServiceResultEntity>{
    let url = `${this.settings.serverUrl}/api/Doctor/getDoctorSchedulesByDrCode?drCode=${drCode}`;
    return this.http.get<ServiceResultEntity>(url, this.settings.httpOptions);
  }

  public getDrByDrCode(code:number):Observable<ServiceResultEntity>{
    let url = `${this.settings.serverUrl}/api/Doctor/GetDrByCode?code=${code}`;
    return this.http.get<ServiceResultEntity>(url, this.settings.httpOptions);
  }
}
