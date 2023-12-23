import { useState } from "react";
import "./register.css";

const RegisterCareGiver = ({onHandleRegisterCaregiver}) => {
   // State to manage form data
   const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    caregiverQualificationandSkills: "",
    address: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Form data submitted:", formData);

    onHandleRegisterCaregiver(formData);
  };
  return (
    <div className="orange-form">
      <h3>
        <span className="text-orange">Caregiver Registration</span>
      </h3>
      <h5>Welcome ⛑ to help together with us👏!</h5>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="  Enter your name.."
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="  Enter your email.."
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="  Enter password.."
          required
        />
        <label>
          Please enter your skill or Experience Evidence..
          <textarea 
          type="text" 
          name="caregiverQualificationandSkills" 
          value={formData.caregiverQualificationandSkills}
          onChange={handleInputChange}
          required />
        </label>

        <textarea
          type="textarea"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="  Address..."
          required
        />

        <button className="btn form-btn primary "> Submit </button>
      </form>
    </div>
  );
};

export default RegisterCareGiver;
