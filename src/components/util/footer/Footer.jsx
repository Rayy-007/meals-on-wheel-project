import "./footer.css";
import { Logo, FooterWave } from "../../ImagesImport";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const activeStyle = {
    color: "#fff",
    borderBottom: "1px solid #fff",
  };

  return (
    <>
      <div className="wave">
        <img src={FooterWave} alt="wave" />
      </div>
      <section className="footer-con">
        <div className="footer container flex">
          <div className="logo flex">
            <img src={Logo} alt="Merry Meal Logo" />
            <div className="text">
              <h3>Meals On Wheel</h3>
              <p>Merry Meal</p>
            </div>
          </div>
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : null)}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : null)}
                to="#about"
              >
                About
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
                to="/getmeal"
              >
                Get Meals
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : null)}
                to="/terms"
              >
                Terms
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : null)}
                to="/register/volunteer"
              >
                Join Volunteer
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : null)}
                to="/register/partner"
              >
                Become Partner
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : null)}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : null)}
                to="/safety"
              >
                Certificate & Safety
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : null)}
                to="/policy"
              >
                Policy
              </NavLink>
            </li>
          </ul>
          <div className="quick-form">
            <p>Quick Mail</p>
            <input type="email" placeholder="Your email to get contact..." />
            <button className="btn secondary">Submit</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
