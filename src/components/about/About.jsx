import "./about.css";
import {
  HomeDonate,
  HomeGiveFood,
  HomeVolunteer,
  Arrow,
  VolunteerGirl,
  GetFoodMan,
  Team1,
  Team2,
  Team3,
  LongArrow,
  Dot,
  Bird1,
  Bird2,
} from "../ImagesImport";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div id="about" className="about-con">
      <section className=" about-first">
        <div className=" flex container ">
          <div className="box">
            <img src={HomeDonate} alt="donate box" />
            <h3>We received Donation</h3>
            <NavLink to="/donate">
              Donate <img src={Arrow} alt="arrow" />
            </NavLink>
          </div>
          <div className="box">
            <img src={HomeVolunteer} alt="volunteer box" />
            <h3>We Prepare Meal for people</h3>
            <NavLink to="/register/volunteer">
              Join with us <img src={Arrow} alt="arrow" />
            </NavLink>
          </div>
          <div className="box">
            <img src={HomeGiveFood} alt="give meal box" />
            <h3>We deliver People</h3>
            <NavLink to="register">
              Get Meals <img src={Arrow} alt="arrow" />
            </NavLink>
          </div>
        </div>
      </section>
      <section className="about-second container flex">
        <div className="about-left">
          <div className="about-title">
            <p>About Us</p>
            <h2>Why Choose MerryMeal</h2>
          </div>
          <div className="about-img">
            <img src={VolunteerGirl} alt="Woman" />
            <img src={GetFoodMan} alt="Man" />
            <img className="long-arrow" src={Dot} alt="Long Arrow" />
          </div>
        </div>
        <div className="about-right">
          <div className="line"></div>
          <p>
            At MerryMeal, we understand the importance of a warm, home-cooked
            meal. Our service goes beyond delivering food; it's about bringing
            comfort, joy, and a sense of community. Members and caregivers can
            easily register, partners and volunteers are welcomed with open
            arms, and donors play a crucial role in supporting our cause.
          </p>
        </div>
      </section>
      <section className="about-third about-second container flex">
        <div className="about-right">
          <div className="about-title">
            <h2>How We Operate</h2>
          </div>
          <div className="line"></div>
          <p>
            Our seamless platform facilitates menu planning, meal preparation,
            and efficient delivery management. We've partnered with food service
            providers nationwide to ensure quick and reliable delivery. From
            safety management to regular reassessment of needs, we cover every
            aspect to guarantee a positive and impactful experience. Join us in
            this heartwarming journey. Together, we can make a difference, one
            meal at a time.
          </p>
          <p>
            Join us in this heartwarming journey. Together, we can make a
            difference, one meal at a time.
          </p>
          <NavLink
            className="btn primary green btn-flex"
            to="register/volunteer"
          >
            Become A Volunteer
            <img src={Arrow} alt="Arrow" />
          </NavLink>
        </div>
        <div className="about-left">
          <div className="about-img">
            <img src={Team1} alt="Woman" />
            <img src={Team2} alt="Man" />
            <img className="bird bird1" src={Bird1} alt="Long Arrow" />
            <img className="bird bird2" src={Bird2} alt="Long Arrow" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
