export interface IBaseService{
    getAll(): Promise<any[]>;
    delete(id:number):void;
}