import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CacheDataUtility } from 'src/app/caches/cache-data-utility';
import Swal from 'sweetalert2';

@Component({
  selector: 'tooth-treatments-part',
  templateUrl: './tooth-treatments-part.component.html',
  styleUrls: ['./tooth-treatments-part.component.css']
})
export class ToothTreatmentsPartComponent {
  constructor(
    public cacheData: CacheDataUtility
  ) { }

  public onRemoveTooth() {
    Swal.fire({
      title: "آیا اطمینان دارید؟",
      icon: "question",
      confirmButtonText: 'بله',
      cancelButtonText: 'خیر',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonColor: 'red',
      confirmButtonColor: "green"
    })
  }


  public onSelectTreatmentstype(value:number) {
    this.selectedTreatEvent.emit(value);
  }
  @Input() public selectedTooth!: number;
  @Output() public selectedTreatEvent = new EventEmitter<number>();
}
