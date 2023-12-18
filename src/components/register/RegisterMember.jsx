import "./register.css";
const RegisterMember = () => {
  return (
    <div className="violet-form">
      <h3>
        Register For <span className="text-violet">Member</span>
      </h3>
      <h5>
        This form if for Memeber 👉to getting supportation of Meal daily 👈 !
      </h5>
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
          type="pre-password"
          name="#"
          placeholder="Enter Password.."
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Confirm Password.."
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
