
import "./login.css"
import { HomeBanner2 } from "../ImagesImport";

const Login = () => {
  return (
    <>
      <div className="contact-container container">
        <section className="flex contact">
          <div className="left">
            
            <h3>Wellcome Back !</h3>
            <p>Login !</p>
            
            <div className="input-form">
              <input type="text" placeholder="Email" className="NameInputBox"/><br/>
              <input type="text" placeholder="Password" className="NameInputBox"/><br/>
            </div>
            <button className="btn primary login-btn">Login</button>
          </div>
          <div className="right">
            <img src={HomeBanner2} alt="Contact Image" />
          </div>
        </section> 
      </div>
    </>
  );
};

export default Login;
