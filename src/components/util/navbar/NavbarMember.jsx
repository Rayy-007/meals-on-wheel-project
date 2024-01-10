import { NavLink, useNavigate } from "react-router-dom";
import { Logo, Member } from "../../ImagesImport";
import "./navbar.css";
import { useState } from "react";

const NavbarMember = ({ logout }) => {
  const navigate = useNavigate();

  const [isLogginOut, setIsLogginOut] = useState(false);

  const activeStyle = {
    fontWeight: 700,
    color: "#FF6347",
  };

  const handleLogout = () => {
    setIsLogginOut(false);
    alert("Log Out successfully!");
    logout();
    navigate("/");
  };

  return (
    <>
      {isLogginOut && (
        <div className="model">
          <h3>Are you sure to Log out?</h3>
          <div className="cta">
            <button className="btn black" onClick={() => setIsLogginOut(false)}>
              Cancel
            </button>
            <button className="btn blue" onClick={handleLogout}>
              Yes
            </button>
          </div>
        </div>
      )}

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
              to="/user/meals"
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
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  to="/donate"
                >
                  Donate
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>

        <div className="profile-con">
          <div className="profile">
            <div className="profile-img">
              <img src={Member} alt="Member Profile" />
            </div>
            <p>Member</p>
          </div>
          <button onClick={() => setIsLogginOut(true)} className="btn blue">
            Log out
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavbarMember;
