import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Product } from './models/api/Product';
import { EnumApiStatus } from './models/utils/EnumApiStatus';
import { baseService } from './service/baseService';

function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {

    baseService.getAll('/products')
      .then(res => {
        if (res.status == true){
          setProducts(res.data)
        }
        else if (res.status == false){
          alert(res.errorMessage);
        }
      })

  }, [])


  return (<>
    <ul>
      {

        products && products.map(item => {
          return <li key={item.id}>{item.name}</li>
        })
      }
    </ul>
  </>
  )
}

export default App


