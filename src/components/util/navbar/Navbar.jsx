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
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="/donate"
          >
            Donate
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="/register"
          >
            Get Meal
          </NavLink>
        </li>
        <li className="dropdown">
          <a>Services</a>
          <ul className="dropdown-content">
            <li>
              <NavLink to="/safety">Safety Management</NavLink>
            </li>
            <li>
              <NavLink to="/feedback">Feedback</NavLink>
            </li>
          </ul>
        </li>
      </ul>

      <div className=" flex">
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
