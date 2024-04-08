import { Component, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ServiceEntity } from 'src/app/interfaces/service/service-entity';
import { ServiceItemEntity } from 'src/app/interfaces/service/service-item-entity';
import { AddNewServiceItemComponent } from '../add-new-service-item/add-new-service-item.component';

@Component({
  selector: 'services-grid',
  templateUrl: './services-grid.component.html',
  styleUrls: ['./services-grid.component.css']
})
export class ServicesGridComponent {
  constructor(
    public bottomSheet: MatBottomSheet
  ) { }

  public onEdit(service: ServiceItemEntity) {
    this.bottomSheet.open(AddNewServiceItemComponent, {
      data: service
    })
  }
  @Input() public servicesItem!: ServiceItemEntity[];
  group: GroupDescriptor[] = [{ field: "groupName" }]
}
