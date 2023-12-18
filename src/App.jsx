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
  Admin,
} from "./components/PagesImport";
import "./main.css";
import RegisterPartner from "./components/register/RegisterPartner";
import RegisterVolunteer from "./components/register/RegisterVolunteer";
import RegisterCareGiver from "./components/register/RegisterCareGiver";

import RegisterMember from "./components/register/RegisterMember";

import Members from "./components/management/admin/Members";
import Parners from "./components/management/admin/Parners";
import Dontators from "./components/management/admin/Dontators";
import Caregivers from "./components/management/admin/Caregivers";
import Volunteers from "./components/management/admin/Volunteers";
import Riders from "./components/management/admin/Riders";

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
            <Route path="partner" element={<RegisterPartner />} />
            <Route path="volunteer" element={<RegisterVolunteer />} />
            <Route path="caregiver" element={<RegisterCareGiver />} />
          </Route>
          {/* Management Pages */}

          <Route path="safety" element={<FoodSafety />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="deliveryMang" element={<Delivery />} />

          <Route path="/safety" element={<FoodSafety />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/deliveryMang" element={<Delivery />} />
          <Route path="admin" element={<Admin />}>
            <Route path="member" element={<Members />} />
            <Route path="caregiver" element={<Caregivers />} />
            <Route path="volunteer" element={<Volunteers />} />
            <Route path="partner" element={<Parners />} />
            <Route path="donator" element={<Dontators />} />
            <Route path="rider" element={<Riders />} />
          </Route>

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
