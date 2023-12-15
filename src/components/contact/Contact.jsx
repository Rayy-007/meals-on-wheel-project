import "./contact.css";
import { HomeBanner2 } from "../ImagesImport";

const Contact = () => {
  return (
    <>
      <div className="contact-container container">
        <section className="flex contact">
          <div className="left">
            
              <h3>Get In Touch With Us</h3>
            
            <div className="input-form">
              <input type="text" placeholder="Name" className="NameInputBox"/><br/>
              <input type="text" placeholder="email" className="NameInputBox"/><br/>
              <textarea type="text" placeholder="Message" className="NameInputBox"/><br/>
            </div>
            <button className="btn primary contact-btn">Send</button>
          </div>
          <div className="right">
            <img src={HomeBanner2} alt="Contact Image" />
          </div>
        </section> 
      </div>
    </>
  );
};

export default Contact;
