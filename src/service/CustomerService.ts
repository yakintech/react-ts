import axios from 'axios';
import { Customer } from '../models/api/Customer'
import { IBaseService } from './IBaseService';



export class CustomerService implements IBaseService {

   async delete(id: number): Promise<void> {
       await axios.delete('https://northwind.vercel.app/api/customers/' + id)
        
    }

    async getAll(): Promise<Customer[]> {

        let response = await axios.get('https://northwind.vercel.app/api/customers');

        let customers: Customer[] = response.data;
        return customers;

    }
}



