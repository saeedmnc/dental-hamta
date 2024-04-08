import { Injectable } from "@angular/core";
import { BaseDataEntity } from "src/app/interfaces/data/base-data-entity";

@Injectable({
    providedIn: 'root'
})
export class PatientDocumentBaseData {
    public apical: BaseDataEntity[] = [
        {
            name: 'بله',
            code: 1,
            tag:""
        },
        {
            name: "خیر",
            code: 2,
            tag:""
        }
    ];
    public development: BaseDataEntity[] = [
        {
            name: 'بله',
            code: 1,
            tag:""
        },
        {
            name: "خیر",
            code: 2,
            tag:""
        }
    ];
    public toothWear: BaseDataEntity[] = [
        {
            name: 'سایش',
            code: 1,
            tag:""
        },
        {
            name: "فرسایش",
            code: 2,
            tag:""
        }
    ];

    public Fracture: BaseDataEntity[] = [
        {
            name: 'شکستگی تاج',
            code: 1,
            tag:''
        },
        {
            name: 'شکستگی ریشه',
            code: 2,
            tag:''
        }
    ];

    public colors: BaseDataEntity[] = [
        {
            name: 'خاکستری',
            code: 1,
            tag:''
        },
        {
            name: 'زرد',
            code: 2,
            tag:''
        },
        {
            name: 'قرمز',
            code: 3,
            tag:''
        }
    ];

    public getColorName(code: number) {
        return this.colors.find(r => r.code == code)?.name;
    };

    public getFractureName(code: number) {
        return this.Fracture.find(r => r.code == code)?.name;
    };

    public getToothWearName(code: number) {
        return this.toothWear.find(r => r.code == code)?.name;
    };

    public getDevelopmentName(code: number) {
        return this.development.find(r => r.code == code)?.name;
    };
    
    public getApicalName(code: number) {
        return this.apical.find(r => r.code == code)?.name;
    };
}
