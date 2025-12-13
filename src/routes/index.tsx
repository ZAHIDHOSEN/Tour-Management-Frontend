import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";

import About from "@/pages/About";
import Analytics from "@/pages/Admin/Analytics";

import Login from "@/pages/Login";
import RegisterPage from "@/pages/RegisterPage";
import Bookings from "@/pages/User/Bookings";
import Verify from "@/pages/Verify";




import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
     Component: App,
     path: "/",
     children: [
      {
        Component:About,
        path:"/about"
      }
     ]
  },
  // admin
  {
    Component:DashboardLayout,
    path:"/admin",
    children:[
      {
        Component:Analytics,
        path:"analytics"
      }
    ]
  },
  // user
  {
    Component:DashboardLayout,
    path:"/user",
    children:[
      {
        Component:Bookings,
        path:"bookings"
      }
    ]
  },

  // others


  

  {
    Component: Login,
    path:"/login"
  },
  {
    Component: RegisterPage,
    path:"/register"
  },
  {
    Component: Verify,
    path: "/verify"
  }

]);