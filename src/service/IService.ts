import { BaseModel } from "../models/api/BaseModel";

export interface IService{
    add():void;
    getAll(): BaseModel[];
    delete(id:number):void;
}