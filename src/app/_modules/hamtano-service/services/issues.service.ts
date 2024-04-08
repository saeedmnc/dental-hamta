import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceResultEntity } from 'src/app/interfaces/service-result-entity';
import { HamtaSettings } from 'src/app/repository/hamtano-settings';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(
    public http: HttpClient,
    public settings: HamtaSettings
  ) { }

  public getIssues(): Observable<ServiceResultEntity> {
    let url = `${this.settings.serverUrl}/api/issues`;

    return this.http.get<ServiceResultEntity>(url, this.settings.httpOptions);
  }
}
