import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Product } from './models/api/Product';
import { EnumApiStatus } from './models/utils/EnumApiStatus';
import CustomerList from './pages/customer/CustomerList';

function App() {



  return (<>
    <CustomerList/>
  </>
  )
}

export default App


