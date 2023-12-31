import { Outlet } from "react-router-dom";
import { Navbar, Footer, NavbarMember } from "./components/PagesImport";
import { useContext } from "react";
import { useAuth } from "./components/login/AuthContext";

const Layout = () => {
  const UserRole = useAuth();
  const role = UserRole.user.authorities[0].authority;
  console.log(UserRole.user.authorities[0].authority);

  return (
    <>
      {role === "ROLE_MEMBER" ? <NavbarMember /> : <Navbar />}

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
