import "./register.css";

const RegisterCareGiver = () => {
  return (
    <div className="orange-form">
      <h3>
        <span className="text-orange">Caregiver Registration</span>
      </h3>
      <h5>Welcome ⛑ to help together with us👏!</h5>
      <form>
        <input
          type="text"
          name="name"
          placeholder="  Enter your name.."
          required
        />
        <input
          type="email"
          name="email"
          placeholder="  Enter your email.."
          required
        />
        <input
          type="password"
          name="password"
          placeholder="  Enter password.."
          required
        />
        <label>
          Please enter your skill or Experience Evidence..
          <input type="file" name="file" required />
        </label>

        <textarea
          type="textarea"
          name="address"
          placeholder="  Address..."
          required
        />

        <button className="btn form-btn primary "> Submit </button>
      </form>
    </div>
  );
};

export default RegisterCareGiver;
