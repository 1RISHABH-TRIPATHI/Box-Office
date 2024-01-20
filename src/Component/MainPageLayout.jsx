import { Outlet } from "react-router-dom";
import Navs from "./Navs";
import AppTitle from './AppTitle'
// eslint-disable-next-line no-unused-vars
const MainPageLayout = ({ children })=>
{
    return <div>
       <AppTitle />
      <Navs />
     <Outlet />
    </div>
}
export default MainPageLayout;