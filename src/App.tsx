import { useEffect } from 'react'
import CustomerList from './pages/customer/CustomerList';
import { CustomerService } from './service/CustomerService';
import { ProductService } from './service/ProductService';



function App() {




  return (<>
  <h1>Hoppala</h1>
    <CustomerList />
  </>
  )
}

export default App


