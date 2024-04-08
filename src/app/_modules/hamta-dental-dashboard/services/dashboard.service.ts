import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartFilterEntity } from 'src/app/interfaces/dashboard/chart-filter-entity';
import { ServiceResultEntity } from 'src/app/interfaces/service-result-entity';
import { HamtaSettings } from 'src/app/repository/hamtano-settings';
import { ServiceResultWrapperUtility } from 'src/app/utility/service-result-wrapper-utility';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    public http: HttpClient,
    public settings: HamtaSettings
  ) {
  
  }

  public getChartData(filter: ChartFilterEntity): Observable<ServiceResultEntity> {
    let url = `${this.settings.serverUrl}/api/Dashboard/GetChartData`;
    let json = JSON.stringify(filter);
    return this.http.post<ServiceResultEntity>(url, json, this.settings.httpOptions);
  }

  public mainUrl = "";
}
