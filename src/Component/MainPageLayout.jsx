import { Outlet } from "react-router-dom";
import Navs from "./Navs";
// eslint-disable-next-line no-unused-vars
const MainPageLayout = ({ children })=>
{
    return <div>
        <h2>Jay Shree Ram </h2>
        Are youn looking for a movie or an Actors
    <Navs />
     <Outlet />
    </div>
}
export default MainPageLayout;