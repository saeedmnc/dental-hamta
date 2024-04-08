import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceResultEntity } from 'src/app/interfaces/service-result-entity';
import { ServiceEntity } from 'src/app/interfaces/service/service-entity';
import { ServiceItemEntity } from 'src/app/interfaces/service/service-item-entity';
import { HamtaSettings } from 'src/app/repository/hamtano-settings';

@Injectable({
  providedIn: 'root'
})
export class ServciesService {

  constructor(
    public http: HttpClient,
    public settings: HamtaSettings
  ) { }

  public getIssues(): Observable<ServiceResultEntity> {
    let url = `${this.settings.serverUrl}/api/services`;

    return this.http.get<ServiceResultEntity>(url, this.settings.httpOptions);
  }


  public createService(service: ServiceEntity): Observable<ServiceResultEntity> {
    let url = `${this.settings.serverUrl}/api/services`;

    let json = JSON.stringify(service);
    return this.http.post<ServiceResultEntity>(url, json, this.settings.httpOptions);
  }

  public getServiceItems() {
    let url = `${this.settings.serverUrl}/api/getServicsItems`;

    return this.http.get<ServiceResultEntity>(url, this.settings.httpOptions);
  }

  public createServiceItem(serviceId: number, serviceItem: ServiceItemEntity) {
    let url = `${this.settings.serverUrl}/api/serviceItem?ServiceId=${serviceId}`;

    let json = JSON.stringify(serviceItem);
    return this.http.post<ServiceResultEntity>(url, json, this.settings.httpOptions);
  }


}
