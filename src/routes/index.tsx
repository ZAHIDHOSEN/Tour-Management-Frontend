import App from "@/App";

import About from "@/pages/About";
import Login from "@/pages/Login";
import RegisterPage from "@/pages/RegisterPage";
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