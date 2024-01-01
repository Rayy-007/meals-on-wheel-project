import "./meal.css";
import MapComponent from "../../../dataFetch/MapComponent";
import hotmeals from "./hotmeals";
import frozenmeals from "./frozenmeals";
import axios from "axios";
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
  };

  const HotMeals = hotmeals.map((hotmeal) => {
    return (
      <div className="meal">
        <img src={hotmeal.imgUrl} alt={hotmeal.title} />
        <div className="des">
          <h3>{hotmeal.title}</h3>
          <ul>
            {hotmeal.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <a className="btn primary blue" href="">
            Get
          </a>
          <b className="badge">Healthy</b>
        </div>
      </div>
    );
  });
  
  const disableHot = hotmeals.map((hotmeal) => {
    const isDisabled = hotmeal.disabled || true; // Check if the card is disabled
  
    return (
      <div className={`meal ${isDisabled ? 'disabled' : ''}`}>
        <img src={hotmeal.imgUrl} alt={hotmeal.title} />
        <div className="des">
          <h3>{hotmeal.title}</h3>
          <ul>
            {hotmeal.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          {isDisabled ? (
            <h4>This meal is currently not available.</h4>
          ) : (
            <>
              <a className="btn primary blue" href="">
                Get
              </a>
              <b className="badge">Healthy</b>
            </>
          )}
        </div>
      </div>
    );
  });

  const FrozenMeals = frozenmeals.map((frozenmeal) => {
    return (
      <div className="meal">
        <img src={frozenmeal.imgUrl} alt={frozenmeal.title} />
        <div className="des">
          <h3>{frozenmeal.title}</h3>
          <ul>
            {frozenmeal.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <a className="btn primary blue" href="">
            Get
          </a>
          <b className="badge">Healthy</b>
        </div>
      </div>
    );
  });

  const databaseMeal = meals.map((meal) => {
    return (
      <div className="meal" key={meal.id}>
        <img src={`http://localhost:8080/uploads/images/${meal.mealPhoto}`} alt={meal.mealName} />
        <div className="des">
          <h3>Meal Name : {meal.mealName}</h3>
          <h3>Meal Desc : {meal.mealDesc}</h3>
          <h3>Partner Name : {meal.partner.companyName}</h3><br/>
          <a className="btn primary blue" onClick={() => handleOrderClick(meal.id)}>
          Order Now
          </a>
          <b className="badge">Healthy</b>
        </div>
      </div>
    );
  });

  const calculateDistance = (partnerLocation) => {
    console.log(partnerLocation);
    console.log(userLocation);
    if (!userLocation || !partnerLocation) return "0000";
    
    const [latStr, lonStr] = partnerLocation.split(','); // Assuming the delimiter is a comma

    const R = 6371; // Earth radius in kilometers
    const lat1 = userLocation.lat();
    const lon1 = userLocation.lng();
    const lat2 = parseFloat(latStr);
    const lon2 = parseFloat(lonStr);

    const partnerLatLng = new window.google.maps.LatLng(lat2, lon2);
    console.log(partnerLatLng);

    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    console.log(dLat);
    console.log(dLon);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    console.log(a);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    console.log(c);
    const distance = R * c; // Distance in kilometers
    console.log(distance);
    return distance;

  };
    
  return (
    <div className="container meals">
      <MapComponent onUserLocationChange={handleUserLocationChange} />
      <h2>Available meals for today</h2>
      <section className="meal hotmeal-con">
        <h3 className="text-orange">Hot Meals</h3>
        <div className="meals-con flex">{databaseMeal}</div>
      </section>

      <section className="meal hotmeal-con" >
        <div className="meals-con flex">{disableHot}</div>
      </section>

      <section className="meal hotmeal-con frozenmeal-con">
        <h3 className="text-violet ">Frozen Meals</h3>
        <div className="meals-con flex">{FrozenMeals}</div>
      </section>


    </div>
  );
  
};

export default Meals;