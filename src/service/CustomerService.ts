import { Customer } from "../models/api/Customer";
import { BaseService } from "./BaseService";

export class CustomerService extends BaseService<Customer> {

    constructor() {
        super("customers");
    }
    
   
}

