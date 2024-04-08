import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog:MatDialog
  ) { }
  public onShowMore() {
    if (this.isShowMore) {
      this.isShowMore = false;
    }
    else if (!this.isShowMore) {
      this.isShowMore = true;
    }
  }

  public onClose() {
    this.dialog.closeAll();
  }
  @Input() public title!: string;
  @Input() public message!: string;
  public isShowMore!: boolean;
}
