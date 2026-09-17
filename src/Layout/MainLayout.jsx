import { Outlet } from "react-router";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
