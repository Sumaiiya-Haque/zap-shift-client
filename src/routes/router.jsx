import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../pages/sendParcel/sendParcel";
import DashBoardLayout from "../layouts/DashBoardLayout";
import MyParcels from "../pages/DashBoard/MyParcels/MyParcels";

   const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
          index:true,
          Component:Home,  
        },
        {
path:'rider',
Component: <PrivateRoute>
  <Rider></Rider>
</PrivateRoute>
        },

{
path:'/send-parcel',
element:<PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
loader:()=> fetch('/service_center.json').then(res=>res.json()) 
},

        {
          path:'coverage',
          Component:Coverage,
          loader:()=> fetch('/service_center.json').then(res=>res.json())  
        },
    ]
  },
  {
    path:'/',
    Component: AuthLayout,
    children:[
      {
        path:'login',
        Component:Login

      },
      {
        path:'register',
        Component:Register
      }
    ]
  },
  {
   path:'dashboard',
    element: <PrivateRoute>
      <DashBoardLayout></DashBoardLayout>
    </PrivateRoute>,
    children:[
      {
        path:'my-parcels',
        Component:MyParcels,
      }
    ]
  }
]);

 export default  router;