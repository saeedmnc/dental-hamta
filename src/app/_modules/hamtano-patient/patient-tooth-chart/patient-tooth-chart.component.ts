import { Component, EventEmitter, Output } from '@angular/core';
import { CacheDataUtility } from 'src/app/caches/cache-data-utility';
import { PatientToothDocumentEntity } from 'src/app/interfaces/patient/patient-tooth-document-entity';
import { ToothPatalogyEntity } from 'src/app/interfaces/patient/tooth-patalogy-entity';
import { ToothEntity } from 'src/app/interfaces/tooth/tooth-entity';

@Component({
  selector: 'patient-tooth-chart',
  templateUrl: './patient-tooth-chart.component.html',
  styleUrls: ['./patient-tooth-chart.component.css']
})
export class PatientToothChartComponent {
  constructor(
    public cacheData: CacheDataUtility
  ) {
    this.selectedTooth = <ToothEntity>{};
    this.cacheData.toothList = this.toothList;

  }
  public onSelectedTooth(tooth: ToothEntity) {
    this.selectedTooth = tooth;
    this.cacheData.selectedTooth = tooth;
    this.selectedToothEvent.emit(tooth);
    this.isOpen = true;
  }

  public toothList: ToothEntity[] = [
    {
      frontImg: 'f18',
      toothNum: 18,
      upperImgSrc: 'u18',
      lowerImg: 'L18',
      isUpperJaw: true,
      upperWheelSrc: 'u18-wheel',
    },
    {
      frontImg: 'f17',
      toothNum: 17,
      upperImgSrc: 'u17',
      lowerImg: '',
      isUpperJaw: true,
      upperWheelSrc: 'u17-wheel',

    },
    {
      frontImg: 'f16',
      toothNum: 16,
      upperImgSrc: 'u16',
      lowerImg: '',
      isUpperJaw: true,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f15',
      toothNum: 15,
      upperImgSrc: 'u15',
      lowerImg: '',
      isUpperJaw: true,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f14',
      toothNum: 14,
      upperImgSrc: 'u14',
      lowerImg: '',
      isUpperJaw: true,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f13',
      toothNum: 13,
      upperImgSrc: 'u13',
      lowerImg: '',
      isUpperJaw: true,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f12',
      toothNum: 12,
      upperImgSrc: 'u12',
      lowerImg: '',
      isUpperJaw: true,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f11',
      toothNum: 11,
      upperImgSrc: 'u11',
      lowerImg: '',
      isUpperJaw: true,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f21',
      toothNum: 21,
      upperImgSrc: '21u',
      lowerImg: '',
      isUpperJaw: true,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f22',
      toothNum: 22,
      upperImgSrc: '22u',
      lowerImg: '',
      isUpperJaw: true,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f23',
      toothNum: 23,
      upperImgSrc: '23u',
      lowerImg: '',
      isUpperJaw: true,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f24',
      toothNum: 24,
      upperImgSrc: '24u',
      lowerImg: '',
      isUpperJaw: true,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f25',
      toothNum: 25,
      upperImgSrc: '25u',
      lowerImg: '',
      isUpperJaw: true,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f26',
      toothNum: 26,
      upperImgSrc: '26u',
      lowerImg: '',
      isUpperJaw: true,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f27',
      toothNum: 27,
      upperImgSrc: '27u',
      lowerImg: '',
      isUpperJaw: true,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f28',
      toothNum: 28,
      upperImgSrc: 'u28',
      lowerImg: '',
      isUpperJaw: true,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f48',
      toothNum: 48,
      upperImgSrc: 'L48',
      lowerImg: '',
      isUpperJaw: false,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f47',
      toothNum: 47,
      upperImgSrc: 'L47',
      lowerImg: '',
      isUpperJaw: false,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f46',
      toothNum: 46,
      upperImgSrc: 'L46',
      lowerImg: '',
      isUpperJaw: false,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f45',
      toothNum: 45,
      upperImgSrc: 'L45',
      lowerImg: '',
      isUpperJaw: false,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f44',
      toothNum: 44,
      upperImgSrc: 'L44',
      lowerImg: '',
      isUpperJaw: false,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f43',
      toothNum: 43,
      upperImgSrc: 'L43',
      lowerImg: '',
      isUpperJaw: false,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f42',
      toothNum: 42,
      upperImgSrc: 'L42',
      lowerImg: '',
      isUpperJaw: false,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f41',
      toothNum: 41,
      upperImgSrc: 'L41',
      lowerImg: '',
      isUpperJaw: false,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f31',
      toothNum: 31,
      upperImgSrc: 'L31',
      lowerImg: '',
      isUpperJaw: false,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f32',
      toothNum: 32,
      upperImgSrc: 'L32',
      lowerImg: '',
      isUpperJaw: false,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f33',
      toothNum: 33,
      upperImgSrc: 'L33',
      lowerImg: '',
      isUpperJaw: false,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f34',
      toothNum: 34,
      upperImgSrc: 'L34',
      lowerImg: '',
      isUpperJaw: false,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f35',
      toothNum: 35,
      upperImgSrc: 'L35',
      lowerImg: '',
      isUpperJaw: false,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f36',
      toothNum: 36,
      upperImgSrc: 'L36',
      lowerImg: '',
      isUpperJaw: false,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f37',
      toothNum: 37,
      upperImgSrc: 'L37',
      lowerImg: '',
      isUpperJaw: false,
      upperWheelSrc: 'u18-wheel',

    },
    {
      frontImg: 'f38',
      toothNum: 38,
      upperImgSrc: 'L38',
      lowerImg: '',
      isUpperJaw: false,
      upperWheelSrc: 'u18-wheel',

    },
  ];

  @Output() public selectedToothEvent = new EventEmitter<ToothEntity>();
  public isOpen: boolean = false;
  public selectedTooth: ToothEntity;
}
