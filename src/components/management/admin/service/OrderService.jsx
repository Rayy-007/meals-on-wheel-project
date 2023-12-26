import axios from "axios";


const API_BASE_URL="http://localhost:8080/order-api/orders";

class OrderService{

    getAllOrders(){
        console.log ("Order Service, get all order method is working");
        return axios.get(API_BASE_URL);
    }

    assignRider(orderId, riderId) {
        return axios.post(`http://localhost:8080/admin/${orderId}/assign-rider/${riderId}`);
      }

}

export default new OrderService();