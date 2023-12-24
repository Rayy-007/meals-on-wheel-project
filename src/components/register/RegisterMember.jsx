import MapComponent from "../../dataFetch/MapComponent";
import "./register.css";
import { useState } from "react";

const RegisterMember = ({ onHandleRegister }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Reset the passwordsMatch state when any input changes
    setPasswordsMatch(true);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    // Check if passwords match and update the passwordsMatch state
    setPasswordsMatch(formData.password === e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Simple client-side validation to check if password and confirmation match
    if (!passwordsMatch) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    console.log("Form data submitted:", formData);

    onHandleRegister(formData);
  };

  return (
    <div className="violet-form">
      <h3>
        Register For <span className="text-violet">Member</span>
      </h3>
      <h5>
        This form if for Memeber 👉to getting supportation of Meal daily 👈 !
      </h5>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          value={formData.name}
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
          type="pre-password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter Password.."
          required
        />
        <input
          type="password"
          name="conPassword"
          placeholder="Confirm Password.."
          onChange={handleConfirmPasswordChange}
          style={{
            borderColor: passwordsMatch ? "" : "red",
          }}
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
        <textarea
          type="textarea"
          name="difficulties"
          placeholder="About Difficulties..."
          required
        />
        <textarea
          type="textarea"
          name="disease"
          placeholder="About Diseases Information..."
          required
        />
        <button className="btn secondary form-btn">Submit</button>
      </form>
    </div>
  );
};

export default RegisterMember;
