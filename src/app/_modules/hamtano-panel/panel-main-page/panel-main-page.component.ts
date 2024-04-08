import { Component } from '@angular/core';
import { CacheDataUtility } from 'src/app/caches/cache-data-utility';

@Component({
  selector: 'panel-main-page',
  templateUrl: './panel-main-page.component.html',
  styleUrls: ['./panel-main-page.component.css']
})
export class PanelMainPageComponent {
  constructor(
    public cacheData:CacheDataUtility
  ){
    
  }


  public isOpen: boolean = false;
}
