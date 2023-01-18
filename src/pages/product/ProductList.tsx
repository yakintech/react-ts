import React, { useEffect, useState } from 'react'
import { Product } from '../../models/api/Product';
import { ProductService } from '../../service/ProductService';

function ProductList() {

  const [products, setproducts] = useState<Product[]>([]);

  useEffect(() => {

    let productService = new ProductService();



  }, [])


  return (<>

  </>
  )
}

export default ProductList