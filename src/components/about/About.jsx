import "./about.css";
import {
  HomeDonate,
  HomeGiveFood,
  HomeVolunteer,
  Arrow,
} from "../ImagesImport";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div id="about" className="about-con">
      <section className="about-first flex container ">
        <div className="box">
          <img src={HomeDonate} alt="donate box" />
          <h3>We received Donation</h3>
          <NavLink>
            Donate <img src={Arrow} alt="arrow" />
          </NavLink>
        </div>
        <div className="box">
          <img src={HomeVolunteer} alt="donate box" />
          <h3>We Prepare Meal for people</h3>
          <NavLink>
            Join with us <img src={Arrow} alt="arrow" />
          </NavLink>
        </div>
        <div className="box">
          <img src={HomeGiveFood} alt="donate box" />
          <h3>We deliver People</h3>
          <NavLink>
            Get Meals <img src={Arrow} alt="arrow" />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default About;
