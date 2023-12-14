import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components/PagesImport";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
