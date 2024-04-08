import { Injectable } from '@angular/core';
import { HamtaSettings } from '../repository/hamtano-settings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceResultEntity } from '../interfaces/service-result-entity';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor(
    public settings: HamtaSettings,
    public http: HttpClient
  ) { }

  public getToday(): Observable<ServiceResultEntity> {
    let url = `${this.settings.serverUrl}/api/Date/getToday`;
    return this.http.get<ServiceResultEntity>(url, this.settings.httpOptions);
  }
}
