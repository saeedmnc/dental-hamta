import { BaseDataEntity } from "../data/base-data-entity";
import { ServiceItemEntity } from "./service-item-entity";

export interface ServiceEntity extends BaseDataEntity {
    name: string;
    id: number;
    items: ServiceItemEntity[];
}
