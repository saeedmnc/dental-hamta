import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet } from '@angular/material/bottom-sheet';
import { ServiceEntity } from 'src/app/interfaces/service/service-entity';
import { ServiceItemEntity } from 'src/app/interfaces/service/service-item-entity';
import { ServiceResultWrapperUtility } from 'src/app/utility/service-result-wrapper-utility';
import { ServciesService } from '../services/servcies.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'new-service-item',
  templateUrl: './add-new-service-item.component.html',
  styleUrls: ['./add-new-service-item.component.css']
})
export class AddNewServiceItemComponent implements OnInit {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public serviceItem : ServiceItemEntity,
    public bottomSheet: MatBottomSheet,
    public serviceWrapper: ServiceResultWrapperUtility,
    public serviceService: ServciesService,
    public snackBar: MatSnackBar,
  ) {
  }


  ngOnInit(): void {
    this.getService();
  }
  onClose() {
    this.bottomSheet.dismiss();
  }

  public async onSave() {
    let res = await this.serviceWrapper.parse(this.serviceService.createServiceItem(this.serviceItem.groupCode, this.serviceItem)) as ServiceItemEntity;
    if (res) {
      this.openSnackBar('با موفقیت ذخیره شد');
      this.bottomSheet.dismiss();
    }
  }
  public openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000
    });
  }
  public async getService() {
    this.service = await this.serviceWrapper.parse(this.serviceService.getIssues()) as ServiceEntity[];

  }

  // public serviceItem: ServiceItemEntity;
  public service: ServiceEntity[] = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

}
