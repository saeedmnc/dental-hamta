import { Injectable } from '@angular/core';
import { HamtaSettings } from '../repository/hamtano-settings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShiftTypeEntity } from '../interfaces/data/shift-type-entity';
import { ServiceResultEntity } from '../interfaces/service-result-entity';

@Injectable({
  providedIn: 'root'
})
export class BaseDataService {

  constructor(
    public settings: HamtaSettings,
    public http: HttpClient
  ) { }

  public getShiftTypeList(): Observable<ServiceResultEntity> {
    let url = `${this.settings.serverUrl}/api/Date/getShiftTypeList`;
    return this.http.get<ServiceResultEntity>(url, this.settings.httpOptions);
  }
  public getBaseData(name:string): Observable<ServiceResultEntity> {
    let url = `${this.settings.serverUrl}/api/Global/getBaseData?name=${name}`;
    return this.http.get<ServiceResultEntity>(url, this.settings.httpOptions);
  }
}
