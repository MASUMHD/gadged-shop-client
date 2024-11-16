import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {

  return (
    <div>
      <div className="bg-base-200">
        <Navbar />
      </div>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
