import { Outlet } from "react-router";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
