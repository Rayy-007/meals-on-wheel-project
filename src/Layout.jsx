import { Outlet } from "react-router-dom";
import {
  Navbar,
  Footer,
  NavbarMember,
  NavbarPartner,
  NavbarRider,
  NavbarCareGiver,
  NavbarAdmin,
} from "./components/PagesImport";
import { useContext } from "react";
import { useAuth } from "./components/login/AuthContext";

const Layout = () => {
  const UserRole = useAuth();
  const role = UserRole?.user?.authorities[0]?.authority;
  const logout = UserRole?.logout;

  return (
    <>
      {role === "ROLE_MEMBER" ? (
        <NavbarMember logout={logout} />
      ) : role === "ROLE_PARTNER" ? (
        <NavbarPartner logout={logout} />
      ) : role === "ROLE_RIDER" ? (
        <NavbarRider logout={logout} />
      ) : role === "ROLE_CAREGIVER" ? (
        <NavbarCareGiver logout={logout} />
      ) : role === "ROLE_VOLUNTEER" ? (
        <NavbarAdmin logout={logout} />
      ) : (
        <Navbar />
      )}

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
