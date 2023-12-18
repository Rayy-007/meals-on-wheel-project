import "./register.css";
import { frozen1, hotMeal1, hotMeal3 } from "../ImagesImport";

const RegisterPartner = () => {
  return (
    <div className="black-form">
      <h3>
        <span className="member-text">Partner Registration</span>{" "}
      </h3>
      <h5>Welcome to be 🥰 partnership with us🙌!</h5>
      <form>
        <input
          type="text"
          name="ownerName"
          placeholder="Enter name who Own your Org.."
          required
        />
        <input
          type="text"
          name="companyName"
          placeholder="Enter your Company Name.."
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter company email.."
          required
        />
        <input
          type="text"
          name="businessType"
          placeholder="Type of Business.."
          required
        />
        <textarea
          type="textarea"
          name="address"
          placeholder="Address..."
          required
        />
        <textarea
          type="textarea"
          name="OrgObjective"
          placeholder="Describe the mission and objectives of your organization..."
          required
        />
        <textarea
          type="textarea"
          name="orgActivity"
          placeholder="Provide an overview of your organization's primary programs and activities..."
          required
        />
        <button className="btn form-btn black">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPartner;
