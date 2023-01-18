import { BaseModel } from "./BaseModel";

export interface Customer extends BaseModel{
    id: number;
    companyName: string;
    contactName: string
}