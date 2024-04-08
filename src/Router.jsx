

import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";
import Order from "./Order";
import Private from "./Private";
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
         {
            path:'/login',
            element: <Login></Login>
         },
         {
            path: '/registration',
            element: <Registration></Registration>
         },
         {
            path:'/order',
            element: <Private><Order></Order></Private>
         }
      ]
    },
  ]);

  export default router