
import { BaseModel } from "../models/api/BaseModel";
import { axiosInstance } from "./axiosInstance";
import { IBaseService } from "./IBaseService";


export class BaseService<T extends BaseModel> {

    private entityUrl: string = "";

    constructor(url: string) {
        this.entityUrl = url;
    }
    async add(model: T): Promise<T> {
        let response = await axiosInstance.post(this.entityUrl, model);
        let data: T = response.data;
        return data;
    }

    async getAll(): Promise<T[]> {

        let response = await axiosInstance.get(this.entityUrl);
        let res: T[] = response.data;

        let data = res.sort((a,b) => a.id - b.id);

        return data;

    }

    async delete(id: number): Promise<void> {
        await axiosInstance.delete(this.entityUrl + "/" + id);
    }

}


