import { ScheduleEntity } from "src/app/ineterfaces/schedule/schedule-entity";

export interface DoctorEntity {
    code: number;
    id: string;
    isActive: boolean;
    gender: number;
    firstName: string;
    lastName: string;
    nezamCode: number;
    drExpert: number;
    birthDate: string;
    phone: string;
    phoneNumber: string;
    address: string;
    expertName: string;
    schedules: ScheduleEntity[];
}
