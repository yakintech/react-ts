import { BaseService } from "./BaseService";
import {Product} from '../models/api/Product'

export class ProductService extends BaseService<Product>{
    
    
    constructor() {
        super("products");
        
    }
}