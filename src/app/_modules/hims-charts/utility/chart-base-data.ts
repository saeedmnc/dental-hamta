import { ThemePalletteEntity } from "src/app/interfaces/chart/theme-pallette-entity";
import { BaseDataEntity } from "src/app/interfaces/data/base-data-entity";

export class ChartBaseData {

    public chartThemePalette: ThemePalletteEntity[] = [
        {
            name: 'زنده',
            code: 1,
            colors: ['#a8395d', '#3f51b5', '#2096f3', '#03b862', '#afdf0a', '#a7b61a']
        },
        {
            name: 'طبیعی',
            code: 2,
            colors: ['#a8395d', '#e99450', '#d89f59', '#f2dfa7', '#a5d7c6', '#7794b1']
        },
        {
            name: 'آتش',
            code: 3,
            colors: ['#a8395d', '#bf360b', '#ff8f00', '#ff7000', '#ff5721', '#e65100']
        },
        {
            name: 'شب',
            code: 4,
            colors: ['#a8395d', '#501356', '#183356', '#272040', '#391b3c', '#1f2b3c']
        },
        {
            name: 'خورشید',
            code: 5,
            colors: ['#a8395d', '#ffecb3', '#ffe082', '#ffd550', '#ffca28', '#ffc107']
        },
        {
            name: 'نئون',
            code: 6,
            colors: ['#a8395d','#ff33ff','#cc33ff','#0100ff','#34ccff','#31ffff']
        },
        {
            name: 'افق',
            code: 7,
            colors: ['#a8395d', '#66ebfd', '#99fdd0', '#fcee4b', '#3bc099', '#fdd6e3']
        },
    ];

    public chartType:BaseDataEntity[]=[
        {
            name:'میله ای عمودی ',
            code:1,
            tag:''
        },
        {
            name:'میله ای افقی',
            code:3,
            tag:'' 
        },
        {
            name:'دایره ای',
            code:2,
            tag:'' 
        }
    ];
}
