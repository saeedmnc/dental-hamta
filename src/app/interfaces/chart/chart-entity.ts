import { ChartDataEntity } from "./chart-data-entity";

export interface ChartEntity {
    id: number;
    code: number;
    name: string;
    typeIX: number;
    size: number;
    themePalette: number;
    data: ChartDataEntity[];
    rank: number;
    isActive: boolean;
    indicatorCode:number;
    createDate: string;
    description: string;
    chartIcon: string;
    userID: number;
    colorCode: string;
    isGradiant: boolean;
    isShowAxis: boolean;
    isDonut: boolean;
    isLabel:boolean;
    chartData: ChartDataEntity[];

}
