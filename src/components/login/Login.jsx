import "./login.css";
import { LoginImage } from "../ImagesImport";

const Login = () => {
  return (
    <div className="container flex login-con">
      <section className="login-form">
        <h2>Welcome Back!</h2>
        <p>Login!</p>
        <form action="">
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button className="btn primary">Login</button>
        </form>
      </section>
      <img src={LoginImage} alt="Volunteer Team Image" />
    </div>
  );
};

export default Login;
