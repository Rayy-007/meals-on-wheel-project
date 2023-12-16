import "./register.css";
import {
    volunteerPhoto1,hotMeal3
} from "../ImagesImport";

const RegisterVolunteer = () => {
    return ( <div className="container">
    <section className="flex">
      <div >
        <br/><br/>
        <h3><span className="member-text">Volunteer Registration</span> </h3> 
        <h5>....................................Welcome to help together with us!</h5> <br/>
  
        <br/>
        <form>
        <input  type="text" name="name" placeholder="  Enter your name.." required/><br/>
        <input  type="email" name="email" placeholder="  Enter your email.." required/><br/>
        <input  type="password" name="password" placeholder="  Enter password.." required/><br/>
        <textarea  type="textarea" name="address" placeholder="  Address..." required/><br/>

        <input type="submit" className="btn-register secondary" value="Submit"/>
  
        </form><br/> 
        <p style={{color: "hsl(270, 75%, 50%)"}}>_________________________________________________________</p><br/>

      </div>
      
      
          <img className="first-img" src={volunteerPhoto1} alt="Hot Meal Image" />
        
    </section>
    
  
  </div>);
};

export default RegisterVolunteer;