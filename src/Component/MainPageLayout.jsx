import { Outlet } from "react-router-dom";
import Navs from "./Navs";
// eslint-disable-next-line no-unused-vars
const MainPageLayout = ({ children })=>
{
    return <div>
        Jay Shree Ram 

    <Navs />
     <Outlet />
    </div>
}
export default MainPageLayout;