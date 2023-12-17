import "./contact.css";
import { Team3, SendArrow } from "../ImagesImport";

const Contact = () => {
  return (
    <>
      <div className="contact-container container">
        <div className="send-arrow">
          <img src={SendArrow} alt="" />
        </div>
        <section className="flex contact">
          <div className="left">
            <h3>Get In Touch With Us</h3>

            <form className="input-form">
              <input type="text" placeholder="Name" className="NameInputBox" />
              <input
                type="email"
                placeholder="email"
                className="NameInputBox"
              />
              <textarea
                placeholder="Message"
                className="NameInputBox"
                cols="30"
                rows="10"
              ></textarea>
            </form>
            <button className="btn primary">Send</button>
          </div>
          <div className="right">
            <img src={Team3} alt="Contact Image" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
