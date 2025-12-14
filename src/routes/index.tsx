import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";

import About from "@/pages/About";
import Login from "@/pages/Login";
import RegisterPage from "@/pages/RegisterPage";
import Bookings from "@/pages/User/Bookings";
import Verify from "@/pages/Verify";
import { generateRoute } from "@/utils/generateRoutes";




import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";

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
      ... generateRoute(adminSidebarItems)
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