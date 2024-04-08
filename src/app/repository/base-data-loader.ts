import { Injectable } from "@angular/core";
import { ServiceResultWrapperUtility } from "../utility/service-result-wrapper-utility";
import { HamtaSettings } from "./hamtano-settings";
import { CacheDataUtility } from "../caches/cache-data-utility";
import { DateService } from "../services/date.service";
import { DateEntity } from "../interfaces/data/date-entity";
import { DoctorService } from "../_modules/hamta-dental-doctor/services/doctor.service";
import { BaseDataEntity } from "../interfaces/data/base-data-entity";
import { ShiftTypeEntity } from "../interfaces/data/shift-type-entity";
import { BaseDataService } from "../services/base-data.service";

@Injectable(
    {
        providedIn: "root",
    }
)
export class BaseDataLoader {
    constructor(
        public serviceWrapper: ServiceResultWrapperUtility,
        public settings: HamtaSettings,
        public cacheData: CacheDataUtility,
        public dateService: DateService,
        public doctorService: DoctorService,
        public baseService: BaseDataService,
    ) { }

    public loadData() {
        this.getToday();
        this.getDrExpertList();
        this.getShiftTypeList();
        this.getDrList();
    }

    public async getToday() {
        this.cacheData.today = await this.serviceWrapper.parse(this.dateService.getToday()) as DateEntity;
    }

    public async getDrExpertList() {
        this.cacheData.drExpertList = await this.serviceWrapper.parse(this.baseService.getBaseData('ExpertList')) as BaseDataEntity[];
    }

    public async getShiftTypeList() {
        this.cacheData.shiftList = await this.serviceWrapper.parse(this.baseService.getBaseData('shiftTypeList')) as BaseDataEntity[];
    }
    public async getDrList() {
        this.cacheData.drList = await this.serviceWrapper.parse(this.baseService.getBaseData('doctor')) as BaseDataEntity[];
    }
}
