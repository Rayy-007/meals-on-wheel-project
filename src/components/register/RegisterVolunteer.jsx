import "./register.css";

const RegisterVolunteer = () => {
  return (
    <div className="green-form">
      <h3>
        <span className="text-green">Volunteer Registration</span>
      </h3>
      <h5>Welcome to 👐 help together with us 💞 !</h5>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter your name.."
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email.."
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password.."
          required
        />
        <textarea
          type="textarea"
          name="address"
          placeholder="Address..."
          required
        />

        <button className="btn form-btn green">Submit</button>
      </form>
    </div>
  );
};

export default RegisterVolunteer;
