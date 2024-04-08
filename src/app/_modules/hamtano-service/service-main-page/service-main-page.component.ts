import { Component, OnInit } from '@angular/core';
import { CacheDataUtility } from 'src/app/caches/cache-data-utility';
import { HamtaSettings } from 'src/app/repository/hamtano-settings';
import { ServiceResultWrapperUtility } from 'src/app/utility/service-result-wrapper-utility';
import { IssuesService } from '../services/issues.service';
import { ServciesService } from '../services/servcies.service';
import { ServiceEntity } from 'src/app/interfaces/service/service-entity';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddNewServiceComponent } from '../add-new-service/add-new-service.component';
import { AddNewServiceItemComponent } from '../add-new-service-item/add-new-service-item.component';
import { ServiceItemEntity } from 'src/app/interfaces/service/service-item-entity';

@Component({
  selector: 'app-service-main-page',
  templateUrl: './service-main-page.component.html',
  styleUrls: ['./service-main-page.component.css']
})
export class ServiceMainPageComponent implements OnInit {
  constructor(
    public serviceResultWrapper: ServiceResultWrapperUtility,
    public issuesService: ServciesService,
    public settings: HamtaSettings,
    public cacheData: CacheDataUtility,
    public bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
    this.settings.getJSON().subscribe(r => {
      this.settings.serverUrl = r.serviceAddress;
      this.showData();
    });
  }

  public async showData() {
    this.servicesItem = await this.serviceResultWrapper.parse(this.issuesService.getServiceItems()) as ServiceItemEntity[];
    this.services = await this.serviceResultWrapper.parse(this.issuesService.getIssues()) as ServiceEntity[];
  }

  public onSelectedService(value: any) {
    console.log(value);
  }

  public onAddService() {
    this.bottomSheet.open(AddNewServiceComponent, {
      disableClose: true
    });
  }

  public onAddServiceItem() {
    this.bottomSheet.open(AddNewServiceItemComponent, {
      data: this.servicesItem,
      disableClose: true
    });
  }

  public servicesItem: ServiceItemEntity[] = [];
  public services: ServiceEntity[] = [];
}
