import { Component, Input } from '@angular/core';
import { CacheDataUtility } from 'src/app/caches/cache-data-utility';

@Component({
  selector: 'side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.css']
})
export class SideNavItemComponent {

  constructor(
    public cacheData: CacheDataUtility
  ) {

  }


  public onSelectedItem() {
    this.cacheData.isSideOpen = false;
  }
  @Input() public name!: string;
  @Input() public icon!: string;
}
