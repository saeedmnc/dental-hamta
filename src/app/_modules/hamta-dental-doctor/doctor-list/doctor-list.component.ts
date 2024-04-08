import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DoctorEntity } from 'src/app/interfaces/dr/doctor-entity';
import { ExpertlistTreeViewEntity } from 'src/app/interfaces/dr/doctor/expertlist-tree-view-entity';

@Component({
  selector: 'doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent {

  public onSlelectedDoctor(value: any) {
    this.doctorEvent.emit(value.dataItem);
  }

  @Input() public expertListTreeview: ExpertlistTreeViewEntity[] = [];
  @Output() public doctorEvent = new EventEmitter<DoctorEntity>();;
  public searchText: string = "";
}
