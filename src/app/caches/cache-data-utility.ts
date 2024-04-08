import { Injectable } from "@angular/core";
import { ToothEntity } from "../interfaces/tooth/tooth-entity";
import { PatientEntity } from "../interfaces/patients/patient-entity";
import { DoctorEntity } from "../interfaces/dr/doctor-entity";
import { BaseDataEntity } from "../interfaces/data/base-data-entity";
import { DateEntity } from "../interfaces/data/date-entity";
import { ShiftTypeEntity } from "../interfaces/data/shift-type-entity";


@Injectable(
    {
        providedIn: "root",
    }
)
export class CacheDataUtility {
    constructor() {
        this.selectedTooth = <ToothEntity>{};
        this.patient = <PatientEntity>{};
        this.today = <DateEntity>{};
    }
    public selectedTooth!: ToothEntity;
    public toothList: ToothEntity[] = [];
    public isSideOpen: boolean = false;
    public patient: PatientEntity;
    public drList: BaseDataEntity[] = [];
    public drExpertList: BaseDataEntity[] = [];
    public today: DateEntity;
    public shiftList: BaseDataEntity[] = [];
    public shiftListValue: ShiftTypeEntity[] = [];
}
