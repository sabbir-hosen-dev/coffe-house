import Navber from "./../Components/Navber/Navber";
import { Outlet } from "react-router";
import Footer from "./../Components/Footer/Footer";

function MainLayout() {
  return (
    <>
      <Navber />
      <div className="min-h-[calc(100vh-228px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
