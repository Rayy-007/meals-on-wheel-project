import { NavLink } from "react-router-dom";
import { Logo } from "../../ImagesImport";
import "./navbar.css";

const Navbar = () => {
  const activeStyle = {
    fontWeight: 700,
    color: "#FF6347",
  };

  return (
    <nav className="flex container">
      <div className="logo flex">
        <img src={Logo} alt="Logo" />
        <div className="logo-text">
          <h3>Meals On Wheel</h3>
          <p>Merry Meal</p>
        </div>
      </div>

      <ul className="flex">
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            href="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            href="#about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            href="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            href="/donate"
          >
            Donate
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            href="/getmeal"
          >
            Get Meal
          </NavLink>
        </li>
      </ul>

      <div className="btn-container flex">
        <a className="btn primary" href="/login">
          Login
        </a>
        <a className="btn outline" href="/register">
          Regiser
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
