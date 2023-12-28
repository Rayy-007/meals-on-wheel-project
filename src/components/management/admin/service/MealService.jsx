import axios from "axios";


const API_BASE_URL="http://localhost:8080/meal-api/meals";

class MealService{

    getAllMeals(){
        console.log ("Meal Service, get all meal method is working");
        return axios.get(API_BASE_URL);
    }

}

export default new MealService();