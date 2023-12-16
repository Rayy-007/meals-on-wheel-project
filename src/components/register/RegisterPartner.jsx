import "./register.css";
import {
  frozen1, hotMeal1,hotMeal3
} from "../ImagesImport";

const RegisterPartner = () => {
    return ( <div className="container">
    <section className="flex">
      <div >
        <br/><br/>
        <h3><span className="member-text">Partner Registration</span> </h3> 
        <h5>....................................Welcome to be partnership with us!</h5> <br/>
  
        <br/>
        <form>
        <input  type="text" name="ownerName" placeholder="  Enter name who Own your Org.." required/><br/>
        <input  type="text" name="companyName" placeholder="  Enter your Company Name.." required/><br/>
        <input  type="email" name="email" placeholder="  Enter company email.." required/><br/>
        <input  type="text" name="businessType" placeholder="  Type of Business.." required/><br/>
        <textarea  type="textarea" name="address" placeholder="  Address..." required/><br/>
        <textarea  type="textarea" name="OrgObjective" placeholder="  Describe the mission and objectives of your organization..." required/><br/>
        <textarea  type="textarea" name="orgActivity" placeholder="  Provide an overview of your organization's primary programs and activities..." required/><br/>
  
        <input type="submit" className="btn-register secondary" value="Submit"/>
  
        </form><br/> 
        <p style={{color: "hsl(270, 75%, 50%)"}}>_________________________________________________________</p><br/>

      </div>
      
      <div className="right">
            <img className="first-img" src={frozen1} alt="Hot Meal Image" />
            <img
              className="second-img"
              src={hotMeal1}
              alt="Frozen Meal img"
            />
            <img className="first-img" src={hotMeal3} alt="Hot Meal Image" />
          
          </div>
    </section>
    
  
  </div>);
};

export default RegisterPartner;