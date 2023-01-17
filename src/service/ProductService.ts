
import axios from 'axios';
import { BaseModel } from '../models/api/BaseModel';
import { Product } from '../models/api/Product';
import { IBaseService } from './IBaseService';
import { IService } from './IService';

export class ProductService implements IBaseService {


    async getAll(): Promise<Product[]> {
        let response = await axios.get('https://northwind.vercel.app/api/products');
        let res: Product[] = response.data;

        return res;
    }
    delete(id: number): void {
        throw new Error('Method not implemented.');
    }
}




