import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import {
  Caregiver,
  Contact,
  Feedback,
  FoodSafety,
  Home,
  Login,
  Meals,
  Register,
  Rider,
  Volunteer,
  Delivery,
} from "./components/PagesImport";
import "./main.css";
import RegisterPartner from "./components/register/RegisterPartner";
import RegisterVolunteer from "./components/register/RegisterVolunteer";
import RegisterCareGiver from "./components/register/RegisterCareGiver";
import RegisterMember from "./components/register/RegisterMember";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />}>
            <Route index element={<RegisterMember />} />
            <Route path="registerP" element={<RegisterPartner />} />
            <Route path="registerV" element={<RegisterVolunteer />} />
            <Route path="registerC" element={<RegisterCareGiver />} />
          </Route>
          {/* Management Pages */}
          <Route path="safety" element={<FoodSafety />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="deliveryMang" element={<Delivery />} />

          {/* User Roles */}
          <Route path="user">
            <Route path="volunteer" element={<Volunteer />} />
            <Route path="caregiver" element={<Caregiver />} />
            <Route path="rider" element={<Rider />} />
            <Route path="meals" element={<Meals />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
