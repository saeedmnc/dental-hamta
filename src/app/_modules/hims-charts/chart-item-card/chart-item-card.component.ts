import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChartBaseData } from '../utility/chart-base-data';
import { ServiceResultWrapperUtility } from 'src/app/utility/service-result-wrapper-utility';
import { ChartEntity } from 'src/app/interfaces/chart/chart-entity';
import { ThemePalletteEntity } from 'src/app/interfaces/chart/theme-pallette-entity';
import { ChartDataEntity } from 'src/app/interfaces/chart/chart-data-entity';

@Component({
  selector: 'chart-item-card',
  templateUrl: './chart-item-card.component.html',
  styleUrls: ['./chart-item-card.component.css']
})
export class ChartItemCardComponent implements OnInit {
  constructor(
    public baseData: ChartBaseData,
    public serviceWrapper: ServiceResultWrapperUtility,
  ) {
  }
  ngOnInit(): void {
    this.initData();
    this.getView(this.chart);
    this.getChartColor(this.chart);
    this.getChartData();

  }

  public async initData() {
    this.chart.chartData = [];
    // this.chart.chartData = await this.serviceWrapper.parse(this.service.getChartsData(this.chart.code, 1)) as ChartDataEntity[];
  }
  public getChartColor(chart: ChartEntity) {
    let domain = this.baseData.chartThemePalette.find(r => r.code == +chart.colorCode)?.colors;
    this.colorScheme = { domain: domain }
  }
  public getView(chart: ChartEntity) {
    if (chart.size == 1) {
      this.view = [280, 300];
    }
    if (chart.size == 1 && chart.typeIX==4) {
      this.view = [350, 300];
    }
    if (chart.size == 2) {
      this.view = [600, 300];
    }
    if (chart.size == 3) {
      this.view = [800, 300];
    }
    if (chart.size == 3 && chart.typeIX==2) {
      this.view = [800, 400];
    }
  }

  public onShowOptions() {
    if (this.isShowOptions) {
      this.isShowOptions = false;
    }
    else if (!this.isShowOptions) {
      this.isShowOptions = true;
    }
  }

  public onChangeGradient() {
    if (this.chart.isGradiant) {
      this.chart.isGradiant = false;
    }
    else if (!this.chart.isGradiant) {
      this.chart.isGradiant = true;
    }
  }
  public onToggleAxis() {
    if (this.chart.isShowAxis) {
      this.chart.isShowAxis = false;
    }
    else if (!this.chart.isShowAxis) {
      this.chart.isShowAxis = true;
    }
  }
  public onToggleDonut() {
    if (this.chart.isDonut) {
      this.chart.isDonut = false;
    }
    else if (!this.chart.isDonut) {
      this.chart.isDonut = true;
    }
  }
  public onToggleLabel() {
    if (this.chart.isLabel) {
      this.chart.isLabel = false;
    }
    else if (!this.chart.isLabel) {
      this.chart.isLabel = true;
    }
  }

  public getChartData() {
    this.isBusy = true
    setTimeout(() => {
      if (this.chart) {
        if (this.chart.chartData) {
          this.data = this.chart.chartData;
          if (this.chart.size != 3) {
            this.data = this.data.splice(0, 5);
          }
          this.isBusy = false
        }
      }
    }, 2000);

  }

  public onSelectTheme(theme: ThemePalletteEntity) {
    this.colorScheme = { domain: theme.colors }
  }

  public onPreview() {
    this.previewEvent.emit(this.chart);
    this.chartEvent.emit(this.chart);
  }



  @Input() public chart!: ChartEntity;

  @Output() public previewEvent = new EventEmitter<ChartEntity>();
  @Output() public chartEvent = new EventEmitter<ChartEntity>();
  @Output() public busyEvent = new EventEmitter<boolean>();

  public isShowOptions: boolean = false;
  public view!: [number, number];
  public isGradient: boolean = false;
  public isShowAxis: boolean = true;
  public data: ChartDataEntity[] = [];
  public colorScheme: any = {
    domain: ['#a8395d', '#b2ebf2', '#7fdeea', '#4cd0e1', '#25c6da', '#00bcd4']
  };

  public isBusy: boolean = false;

}
