import { DoctorEntity } from "../doctor-entity";

export interface ExpertlistTreeViewEntity {
    name: string;
    doctors: DoctorEntity[];
}
