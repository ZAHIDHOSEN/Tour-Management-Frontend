import { Outlet } from "react-router"
import CommonLayout from "./components/layout/CommonLayout"
import { generateRoute } from "./utils/generateRoutes"
import { adminSidebarItems } from "./routes/adminSidebarItems"


function App() {

  console.log(generateRoute(adminSidebarItems))
  
  return (
   <CommonLayout>
    <Outlet></Outlet>
   </CommonLayout>
  )
}

export default App