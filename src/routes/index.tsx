import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Login from "@/pages/Login";
import RegisterPage from "@/pages/RegisterPage";
import Verify from "@/pages/Verify";
import { generateRoute } from "@/utils/generateRoutes";import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import { withAuth } from "@/utils/withAuth";
import type { TRole } from "@/types";
import { role } from "@/constant/role";

import Unauthorized from "@/pages/Unauthorized";
import Home from "@/pages/Home";



export const router = createBrowserRouter([
  {
     Component: App,
     path: "/",
     children: [
      {
       Component:Home,
       path:"/",
      },
      {
        Component:About,
        path:"about"
      }
     ]
  },

  // admin
  {
    Component:withAuth(DashboardLayout,role.superAdmin as TRole),
    path:"/admin",
    children:[
      {index:true, element:<Navigate to={`/admin/analytics`}></Navigate> },
      ... generateRoute(adminSidebarItems)
    ]
  },

  // user
  {
    Component:withAuth(DashboardLayout,role.user as TRole),
    path:"/user",
    children:[
     {index:true, element:<Navigate to={`/user/bookings`}></Navigate> },
      ...generateRoute(userSidebarItems)
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
  },
  {
    Component: Unauthorized,
    path: "/unAuthorized"
  }

]);