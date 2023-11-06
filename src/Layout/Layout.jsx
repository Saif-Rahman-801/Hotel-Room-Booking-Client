import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home/Navbar";

const Layout = () => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;