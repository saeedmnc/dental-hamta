import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ChartBaseData } from '../utility/chart-base-data';
import { ServiceResultWrapperUtility } from 'src/app/utility/service-result-wrapper-utility';
import { ThemePalletteEntity } from 'src/app/interfaces/chart/theme-pallette-entity';
import { ChartDataEntity } from 'src/app/interfaces/chart/chart-data-entity';
import { ChartEntity } from 'src/app/interfaces/chart/chart-entity';

@Component({
  selector: 'chart-preview',
  templateUrl: './chart-preview.component.html',
  styleUrls: ['./chart-preview.component.css']
})
export class ChartPreviewComponent implements OnInit {

  constructor(
    public baseData: ChartBaseData,
    public serviceWrapper: ServiceResultWrapperUtility,
    private elRef: ElementRef,

  ) {

  }

  ngOnInit(): void {
    this.getView(this.chart);
    this.getChartColor(this.chart);
    this.chart.isShowAxis = true;



  }




  public getChartColor(chart: ChartEntity) {
    let domain = this.baseData.chartThemePalette.find(r => r.code == +chart.colorCode)?.colors;
    this.colorScheme = { domain: domain }
  }

  public getView(chart: ChartEntity) {
    if (chart) {
      if (chart.chartData) {
        // if(chart.typeIX==2 && chart.isDonut){
        //   this.view=[1200,400];
        // }
        if (chart.chartData.length < 5) {
          this.view = [900, 250];

        }
        if (chart.chartData.length > 5 && chart.chartData.length < 15) {
          this.view = [900, 400];
        }
        if (chart.chartData.length > 15) {
          this.view = [900, 1000];
          this.chart.typeIX = 1;
          // this.chart.chartData = this.chart.chartData.splice(1, 50);
        }
        if (chart.chartData.length > 20) {
          this.view = [900, 1000];
          this.chart.typeIX = 1;
          // this.chart.chartData = this.chart.chartData.splice(1, 50);
        }
        if (chart.chartData.length > 40) {
          // this.date = chart.chartData.slice(0, 30);
          // this.chart.chartData = result;
        }
      }
    }
  }

  public onClosePreview() {
    this.closeEvent.emit();
  }

  public onSelectTheme(theme: ThemePalletteEntity) {
    this.colorScheme = { domain: theme.colors }
  }

  public async onChangeChartType(type: number) {
    this.chart.typeIX = type;
    this.chart.chartData = [];
    this.isBusy = true;
    // this.chart.chartData = await this.serviceWrapper.parse(this.chartService.getChartsData(this.chart.code, 1)) as ChartDataEntity[];
    this.isBusy = false;
  }


  @Input() public chart!: ChartEntity;
  @Output() public closeEvent = new EventEmitter();

  public colorScheme: any = {
    domain: ['#a8395d', '#b2ebf2', '#7fdeea', '#4cd0e1', '#25c6da', '#00bcd4']
  };
  public view!: [number, number];
  public isBusy: boolean = false;
  @Input() public data: ChartDataEntity[] = [];
}
