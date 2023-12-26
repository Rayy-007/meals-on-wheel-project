import Home from "./home/Home";
import Contact from "./contact/Contact";
import Login from "./login/Login";
//below are register pages;
import Register from "./register/Register";
// Below pages only can accessable after login
import Meals from "./users/meals/Meals";
import Volunteer from "./users/volunteer/Volunteer";
import Rider from "./users/rider/Rider";
import Caregiver from "./users/caregiver/Caregiver";
// Management Pages
import Admin from "./management/admin/Admin";
import Delivery from "./management/partner/Delivery";
import Feedback from "./management/feedback/Feedback";
import FoodSafety from "./management/foodSafety/FoodSafety";

// Utility Components
import Navbar from "./util/navbar/Navbar";
import Footer from "./util/footer/Footer";

export {
  Home,
  Contact,
  Login,
  Register,
  Meals,
  Volunteer,
  Rider,
  Caregiver,
  Admin,
  Delivery,
  Feedback,
  FoodSafety,
  Navbar,
  Footer,
};
