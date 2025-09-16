import App from "@/App";

import About from "@/pages/About";
import Login from "@/pages/Login";
import RegisterPage from "@/pages/RegisterPage";
import verify from "@/pages/verify";


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
  {
    Component: Login,
    path:"/login"
  },
  {
    Component: RegisterPage,
    path:"/register"
  },
  {
    Component: verify,
    path: "/verify"
  }

]);