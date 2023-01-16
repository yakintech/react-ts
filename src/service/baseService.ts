import axios from "axios";
import { EnumApiStatus } from "../models/utils/EnumApiStatus";
import { ResponseModel } from "../models/utils/ResponseModel";

let BASE_URL = 'https://northwind.vercel.app/api'

export const baseService = {
    getAll: async (url: string) : Promise<ResponseModel> => {

        let response: ResponseModel = {

        };

        await axios.get(BASE_URL + url)
            .then(res => {      
                    response.data = res.data;
               
            })
            .catch(err => {
                response.data = [];
             
                response.errorMessage = err.message;
            })

        return response;
    },
    getById: async (url: string, id: number) : Promise<ResponseModel> => {

        let response: ResponseModel = {
            data:{}
        };

        await axios.get(BASE_URL + url + "/" + id)
            .then(res => {
                response.data = res.data;
                response.status = true;
            })
            .catch(err => {
                response.status = false;
                response.errorMessage = err.message;
            })

        return response;
    }
}







