import { Outlet } from "react-router-dom";
import Sidebar from "../components/Shared/Sidebar/Sidebar";

const Main = () => {
    return (
        <div className="w-full flex">
            <Sidebar />
            <Outlet />   
        </div>
    );
};

export default Main;