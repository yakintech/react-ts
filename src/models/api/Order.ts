import { BaseModel } from "./BaseModel";


export interface Order extends BaseModel{
    shipName: string;
    shipVia: number
}