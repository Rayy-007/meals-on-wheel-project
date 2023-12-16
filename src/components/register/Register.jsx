import "./register.css";
import registerphoto from "./register-photo.png";
import getmealicon from "./get-meal-icon.png";


const Register = () => {
  return ( <div className="container">
  <section className="flex">
    <div >
      <br/><br/>
      <h3>Register For <span className="member-text">Member</span> </h3> 
      <h5>....................................to getting supportation of Meal daily !</h5> <br/>

      <br/>
      <form>
      <input  type="text" name="name" placeholder="  Enter your name.." required/><br/>
      <input  type="email" name="email" placeholder="  Enter your email.." required/><br/>
      <input  type="pre-password" name="#" placeholder="  Enter Password.." required/><br/>
      <input  type="password" name="password" placeholder="  Confirm Password.." required/><br/>
      <textarea  type="textarea" name="address" placeholder="  Address..." required/><br/>
      <textarea  type="textarea" name="difficulties" placeholder="  About Difficulties..." required/><br/>
      <textarea  type="textarea" name="disease" placeholder="  About Diseases Information..." required/><br/>

      <input type="submit" className="btn-register secondary" value="Submit"/>

      </form><br/> 
      <p style={{color: "hsl(270, 75%, 50%)"}}>____________________________  Or  _____________________________</p><br/>
      <div className="background-div"><br/>
        
        <div className="btn-container">
          <a href="/registerP"><button className="btn-regPartner">Join As Partner <span><img className="logo-reg-btn" src={getmealicon}/></span></button></a> <br/><br/>
          <a href="/registerV" ><button className="btn-regVolun">Join As Volunteer <span><img className="logo-reg-btn" src={getmealicon}/></span></button></a> <br/><br/>
          <a href="/registerC" ><button className="btn-regCareGiver">Join As Caregiver <span><img className="logo-reg-btn" src={getmealicon}/></span></button></a> <br/><br/><br/><br/><br/>
          <p>Already have an account? <a href="#" style={{color:"#f8590af6"}}>Login here</a></p>
        </div>
        
      </div>
    </div>
    <img className="register-photo" src={registerphoto} />
  </section>
  

</div>)
 
};

export default Register;
