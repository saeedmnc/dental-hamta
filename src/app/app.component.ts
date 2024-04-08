import { Component, OnInit } from '@angular/core';
import { BaseDataLoader } from './repository/base-data-loader';
import { HamtaSettings } from './repository/hamtano-settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public baseDataLoader: BaseDataLoader,
    public settings: HamtaSettings
  ) { }
  title = 'hamta-dental';
  ngOnInit(): void {
    this.settings.getJSON().subscribe(r => {
      this.settings.serverUrl = r.serviceAddress;
      this.baseDataLoader.loadData();
    });
  }
}
