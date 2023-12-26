import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/login/AuthContext.jsx";
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
import OrderComponent from "./components/management/admin/OrderComponent.jsx";
import DonateForm from "./components/donate/donate.jsx";
//  Data fetch
import { memberData } from "./dataFetch/memberData";
import { partnerData } from "./dataFetch/partnerData";
import { volunteerData } from "./dataFetch/volunteerData";
import { caregiveData } from "./dataFetch/caregiverData";
import MealForm from "./components/management/partner/MealUpload.jsx";
// import { memberData } from "./dataFetch/memberData";

function App() {
  
  const onHandleRegister = (data) => {
    // memberData(memberData);
    memberData(data);
    console.log("This is from app.jsx", data);
  };

  const onHandleRegisterPartner = (data) => {
    //partnerData (partnerData.js)
    partnerData(data)
    console.log("Thiis is from app.jsx", data);
  }

  const onHandleRegisterVolunteer = (data) => {
    //volunteerData (volunteerData.js)
    volunteerData(data)
    console.log("This is from app.jsx", data);
  }

  const onHandleRegisterCaregiver = (data) => {
    //caregiverData (cargiverData.js)
    caregiveData(data)
    console.log("This is from app.jsx", data);
  }

  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
         
          <Route path="donate" element={< DonateForm />} />
          <Route path="register" element={<Register />}>
            <Route
              index
              element={<RegisterMember onHandleRegister={onHandleRegister} />}
            />
            <Route path="partner" element={<RegisterPartner onHandleRegisterPartner={onHandleRegisterPartner}/>} />
            <Route path="volunteer" element={<RegisterVolunteer onHandleRegisterVolunteer={ onHandleRegisterVolunteer} />} />
            <Route path="caregiver" element={<RegisterCareGiver onHandleRegisterCaregiver={onHandleRegisterCaregiver } />} />
          </Route>
          {/* Management Pages */}

          <Route path="safety" element={<FoodSafety />} />
          <Route path="feedback" element={<Feedback />} />

          <Route path="/safety" element={<FoodSafety />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="admin" element={<Admin />}>
            <Route path="member" element={<Members />} />
            <Route path="caregiver" element={<Caregivers />} />
            <Route path="volunteer" element={<Volunteers />} />
            <Route path="partner" element={<Parners />} />
            <Route path="donator" element={<Dontators />} />
            <Route path="rider" element={<Riders />} />
            <Route path="order" element={<OrderComponent />} />
          </Route>

          {/* User Roles */}
          <Route path="user">
            <Route path="partner" element={<Delivery />}/>
            <Route path="mealform" element={<MealForm />} />
            

            <Route path="volunteer" element={<Volunteer />} />
            <Route path="caregiver" element={<Caregiver />} />
            <Route path="rider" element={<Rider />} />
            <Route path="meals" element={<Meals />} />
          </Route>
        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
