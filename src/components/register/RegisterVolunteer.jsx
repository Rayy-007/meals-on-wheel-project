import { useState } from "react";
import "./register.css";

const RegisterVolunteer = ({ onHandleRegisterVolunteer }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Form data submitted:", formData);

    onHandleRegisterVolunteer(formData);
  };
  return (
    <div className="green-form">
      <h3>
        <span className="text-green">Volunteer Registration</span>
      </h3>
      <h5>Welcome to 👐 help together with us 💞 !</h5>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Enter your name.."
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email.."
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter password.."
          required
        />
        <textarea
          type="textarea"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Address..."
          required
        />

        <button className="btn form-btn green">Submit</button>
      </form>
    </div>
  );
};

export default RegisterVolunteer;
