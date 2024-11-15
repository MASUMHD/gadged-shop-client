import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar";

const DashboardLayouts = () => {
    return (
        <div className="grid lg:grid-cols-12 min-h-screen">
            <div className="lg:col-span-2">
                <Sidebar />
            </div>
            <div className="lg:col-span-10 p-12">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayouts;
