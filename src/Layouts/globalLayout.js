import NavBar from "../Components/Navbar";
import {Outlet} from "react-router-dom"


const GlobalLayout = () => {
    return(
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default GlobalLayout;
