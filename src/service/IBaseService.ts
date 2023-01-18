import { BaseModel } from "../models/api/BaseModel";

export interface IBaseService{
    getAll(): Promise<BaseModel[]>;
    delete(id:number):Promise<void>;
    add(model:BaseModel): Promise<BaseModel>;
}