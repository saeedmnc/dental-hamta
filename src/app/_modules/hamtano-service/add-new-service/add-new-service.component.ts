import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ServiceEntity } from 'src/app/interfaces/service/service-entity';
import { ServciesService } from '../services/servcies.service';
import { HamtaSettings } from 'src/app/repository/hamtano-settings';
import { ServiceResultWrapperUtility } from 'src/app/utility/service-result-wrapper-utility';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'add-new-service',
  templateUrl: './add-new-service.component.html',
  styleUrls: ['./add-new-service.component.css']
})
export class AddNewServiceComponent {
  constructor(public bottomSheet: MatBottomSheet,
    public serviceService: ServciesService,
    public settings: HamtaSettings,
    public snackBar: MatSnackBar,
    public serviceWrapperResult: ServiceResultWrapperUtility
  ) {
    this.service = <ServiceEntity>{};
  }
  public onClose() {
    this.bottomSheet.dismiss();
  }

  public async onSave() {
    let res = await this.serviceWrapperResult.parse(this.serviceService.createService(this.service))
    if (res) {
      this.openSnackBar('با موفقیت ذخیره شد');
    }
  }
  public openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000
    });
  }
  public service: ServiceEntity;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
}
