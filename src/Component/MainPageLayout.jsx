import { Outlet } from "react-router-dom";
import Navs from "./Navs";
const MainPageLayout = ({ children })=>
{
    return <div>
        Jay Shree Ram 
    <Navs />
     <Outlet />
    </div>
}
export default MainPageLayout;