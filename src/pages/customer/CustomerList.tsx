import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Customer } from '../../models/api/Customer';
import { CustomerService } from '../../service/CustomerService';

function CustomerList() {

    const [customers, setcustomers] = useState<Customer[]>([]);

    useEffect(() => {

        //instance
        let customerService = new CustomerService();

        customerService.getAll()
            .then(data => {
                setcustomers(data);
            })

    }, []);


    const deleteCustomer = (id: number) => {
        //instance
        let customerService = new CustomerService();
        
        customerService.delete(id)
            .then(res => {
                customerService.getAll()
                    .then(data => {
                        setcustomers(data);
                    })
            })



    }
    return (<>
        <ul>
            {
                customers && customers.map(item => <li>{item.companyName}</li>)
            }
        </ul>
    </>
    )
}

export default CustomerList

