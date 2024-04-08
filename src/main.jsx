import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import router from './Router.jsx'

import {
  RouterProvider,
} from "react-router-dom";
import Authprovider from './Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
   <Authprovider>
   <RouterProvider router={router}></RouterProvider> 
   </Authprovider>
  </React.StrictMode>,
)
