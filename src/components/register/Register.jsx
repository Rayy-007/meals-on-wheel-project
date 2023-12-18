import "./register.css";
import {
  RegisterImage,
  PartnerIcon,
  DonateIcon,
  GetMealIcon,
} from "../ImagesImport";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const changeLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container">
      <section className="flex">
        <div className="register-form">
          {loading ? (
            <div className="loading">
              <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : (
            <Outlet />
          )}

          <br />
          <div className="orLine">Or</div>
          <br />
          {loading ? (
            <div className="loading">
              <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : (
            <div className="background-div">
              <div className="btn-container">
                <NavLink
                  onClick={changeLoading}
                  className="btn btn-flex secondary"
                  to="./"
                >
                  Join As Member
                  <img className="logo-reg-btn" src={GetMealIcon} />
                </NavLink>
                <NavLink
                  onClick={changeLoading}
                  className="btn btn-flex black"
                  to="partner"
                >
                  Join As Partner
                  <img className="logo-reg-btn" src={PartnerIcon} />
                </NavLink>
                <NavLink
                  onClick={changeLoading}
                  className="btn btn-flex green"
                  to="volunteer"
                >
                  Join As Volunteer
                  <img className="logo-reg-btn" src={DonateIcon} />
                </NavLink>
                <NavLink
                  onClick={changeLoading}
                  className="btn btn-flex primary"
                  to="caregiver"
                >
                  Join As Caregiver
                  <img className="logo-reg-btn" src={DonateIcon} />
                </NavLink>
                <p>
                  Already have an account?
                  <a href="#" className="text-orange">
                    Login here
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
        <img className="register-photo" src={RegisterImage} />
      </section>
    </div>
  );
};

export default Register;
