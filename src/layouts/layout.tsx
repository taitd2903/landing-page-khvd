import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import SuspenseWithProgress from "./SupenseWithProgress";

const Layout = () => {


  return (
    <>
   <Header />
      <SuspenseWithProgress>
        <Outlet />
      </SuspenseWithProgress>
      <Footer />
    </>
  );
};

export default Layout;
