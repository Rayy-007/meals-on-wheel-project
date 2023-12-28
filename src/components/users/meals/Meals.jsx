import "./meal.css";
import MapComponent from "../../../dataFetch/MapComponent";
import hotmeals from "./hotmeals";
import frozenmeals from "./frozenmeals";
import {
  FronzenMeal1,
  FronzenMeal2,
  FronzenMeal3,
  HotMeal1,
  HotMeal2,
  HotMeal3,
} from "../../ImagesImport";
import { useState, useEffect } from "react";
import { useAuth } from "../../login/AuthContext";
import MealService from "../../management/admin/service/MealService";


const Meals = () => {

  const [meals, setMeals] = useState([]);
  const { user } = useAuth();
  const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
      MealService.getAllMeals()
        .then(res => setMeals(res.data))
        .catch(error => console.error('Error fetching meals:', error));
    }, []); // Empty dependency array to run the effect only once on mount

      const handleOrderClick = (mealId) => {
        const memberId = user?.memberId;
    
        if (!memberId) {
          console.error('Member ID not found.');
          return;
        }
    
        const orderData = {
            memberId: memberId,
            mealId: mealId,
          };
  
      // Make a POST request to create an order
      axios.post(`http://localhost:8080/order-api/${memberId}/order/${mealId}`, orderData)
        .then((res) => {
          console.log("Order created:", res.data);
          // Optionally, you can update the state or show a success message to the user
        })
        .catch((error) => {
          console.error("Error creating order:", error);
          // Handle the error (e.g., show an error message to the user)
        });
  
  };

  
  const handleUserLocationChange = (userLocation) => {
    setUserLocation(userLocation);
    console.log(userLocation);
    return userLocation;
  };

  const calculateDistance = (partnerLocation) => {
    console.log(partnerLocation);
    if (!userLocation || !partnerLocation) return null;

    const R = 6371; // Earth radius in kilometers
    const lat1 = userLocation.lat();
    const lon1 = userLocation.lng();
    const [latStr, lonStr] = partnerLocation.split(','); // Assuming the delimiter is a comma
    const lat2 = parseFloat(latStr);
    const lon2 = parseFloat(lonStr);

    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance in kilometers
    return distance;
  };

    
  return (
    <div className="container-fluid">
      <MapComponent onUserLocationChange={handleUserLocationChange} />
    <div className="row">
      <div className="card-group">
        {meals.map(meal => (
          <div className="card" key={meal.id}>
            <img className="mealphoto" src={`http://localhost:8080/uploads/images/${meal.mealPhoto}`} alt={meal.mealName} />
            <div className="card-body">
              <h5 className="card-title">Meal Name : {meal.mealName} </h5>
              <p className="card-text">Meal Desc : {meal.mealDesc} </p>
              <p className="card-text">Partner Name : {meal.partner.companyName} </p>
              <p className="card-text">
                  Distance: {calculateDistance(meal.partner.companyLocation)} km
              </p>
              <button type="button" onClick={() => handleOrderClick(meal.id)}>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Meals;