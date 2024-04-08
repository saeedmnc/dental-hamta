import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { BaseDataEntity } from 'src/app/interfaces/data/base-data-entity';

@Component({
  selector: 'edit-rank-drop-box',
  templateUrl: './edit-rank-drop-box.component.html',
  styleUrls: ['./edit-rank-drop-box.component.css']
})
export class EditRankDropBoxComponent {
  @ViewChild('input') input!: ElementRef;
  constructor(
    private renderer: Renderer2

  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.input.nativeElement) {
        this.isshowList = false;
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
  }

  public onFocuse() {
    this.isshowList = true;
  }
  public focuseOut() {
    this.isshowList = false;
  }


  @Input() public caption!: string;
  @Input() public dataSource!: BaseDataEntity[];
  @Input() public value!: string;
  public isshowList: boolean = false;
}
