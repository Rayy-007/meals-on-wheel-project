import React, { useState, useEffect } from "react";
import MealService from "../../home/meal-service/MealService";
import { useAuth } from "../../login/AuthContext";
import axios from "axios";
import OrderService from "./service/OrderService";

const OrderComponent = () => {
  const [orders, setOrders] = useState([]);
  const [riders, setRiders] = useState([]);
  const { user } = useAuth();
  const [selectedRiders, setSelectedRiders] = useState(null);

  useEffect(() => {
    OrderService.getAllOrders()
      .then((res) => {
        // Initialize selectedRiders state based on the fetched orders
        const initialSelectedRiders = {};
        res.data.forEach((order) => {
          initialSelectedRiders[order.id] = ""; // Initially, no rider is selected
        });
        setSelectedRiders(initialSelectedRiders);

        setOrders(res.data);
      })
      .catch((error) => console.error("Error fetching orders:", error));

    axios
      .get("http://localhost:8080/rider-api/riders")
      .then((res) => setRiders(res.data))
      .catch((error) => console.error("Error fetching riders:", error));
  }, []); // Empty dependency array to run the effect only once on mount

  const handleRiderChange = (orderId, riderId) => {
    setSelectedRiders((prevState) => ({
      ...prevState,
      [orderId]: riderId,
    }));
  };

  const handleAssignRiderClick = (orderId) => {
    const selectedRiderId = selectedRiders[orderId];

    // Make an API call to assign the selected rider to the order
    // You need to implement the OrderService.assignRiderToOrder method
    OrderService.assignRider(orderId, selectedRiderId)
      .then((res) => {
        console.log("API Response:", res.data);
        // Update the local state with the new data (include assigned rider)
        setOrders((prevOrders) => {
          return prevOrders.map((order) => {
            if (order.id === orderId) {
              // Assuming your API response includes the riderName
              return { ...order, riderName: res.data };
            }
            return order;
          });
        });

        console.log(`Rider assigned to order ${orderId}:`, res.data);
        alert("Assigned Rider Successfully!");
        // Optionally, you can update the state or show a success message to the user
      })
      .catch((error) => {
        console.error(`Error assigning rider to order ${orderId}:`, error);
        // Handle the error (e.g., show an error message to the user)
      });
  };

  return (
    <div className="container-fluid">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Member Name</th>
            <th>Member Address</th>
            <th>Member Location</th>
            <th>Meal Name</th>
            <th>Order Date</th>
            <th>Rider Name</th>
            <th>Assign Rider</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.memberName}</td>
              <td>{order.memberAddress}</td>
              <td>{order.memberLocation}</td>
              <td>{order.mealName}</td>
              <td>{order.orderDate}</td>
              <td>{order.riderName}</td>
              <td>
                <select
                  value={selectedRiders[order.id]}
                  onChange={(e) => handleRiderChange(order.id, e.target.value)}
                >
                  <option value="">Select Rider</option>
                  {/* Populate dropdown options with riders */}
                  {riders.map((rider) => (
                    <option key={rider.id} value={rider.id}>
                      {rider.username}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button
                  className="btn green"
                  type="button"
                  onClick={() => handleAssignRiderClick(order.id)}
                >
                  Assign Rider
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderComponent;
