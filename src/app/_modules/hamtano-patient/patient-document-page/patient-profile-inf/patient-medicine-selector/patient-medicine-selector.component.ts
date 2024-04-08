import { Component, OnInit } from '@angular/core';
import { IssuesService } from 'src/app/_modules/hamtano-service/services/issues.service';
import { BaseDataEntity } from 'src/app/interfaces/data/base-data-entity';
import { IssueEntity } from 'src/app/interfaces/issue/issue-entity';
import { HamtaSettings } from 'src/app/repository/hamtano-settings';
import { ServiceResultWrapperUtility } from 'src/app/utility/service-result-wrapper-utility';

@Component({
  selector: 'patient-medicine-selector',
  templateUrl: './patient-medicine-selector.component.html',
  styleUrls: ['./patient-medicine-selector.component.css']
})
export class PatientMedicineSelectorComponent implements OnInit {
  constructor(
    public serviceResultWrapper: ServiceResultWrapperUtility,
    public issuesService: IssuesService,
    public settings: HamtaSettings
  ) { }

  ngOnInit(): void {
    this.settings.getJSON().subscribe(r => {
      this.settings.serverUrl = r.serviceAddress;
      this.showData();
    });
  }

  public async showData() {
    this.issues = await this.serviceResultWrapper.parse(this.issuesService.getIssues()) as BaseDataEntity[];
  }

  public onAddIssues() {
    
  }

  public issues: BaseDataEntity[] = [];
  public selectedIssues: BaseDataEntity[] = [];
}
