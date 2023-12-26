import axios from "axios";


const API_BASE_URL="http://localhost:8080/admin/members";

class MemberService{

    getAllMembers(){
        console.log ("Order Service, get all order method is working");
        return axios.get(API_BASE_URL);
    }

    assignCaregiver(memberId, caregiverId) {
        return axios.post(`http://localhost:8080/admin/${memberId}/assign-caregiver/${caregiverId}`);
      }

}

export default new MemberService()