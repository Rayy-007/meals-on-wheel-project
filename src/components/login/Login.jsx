import "./login.css";
import { LoginImage } from "../ImagesImport";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const authContext = useAuth();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/user-api/login",
        {
          email,
          password,
        }
      );

      if (response && response.data) {
        console.log(response.data); // You might want to handle the response accordingly
        authContext.login(response.data);

        // Redirect to a different page based on the user type

        const authorities = response.data.authorities || [];
        const authorityRoutes = {
          ROLE_MEMBER: "/user/meals",
          ROLE_PARTNER: "/user/partner",
          ROLE_RIDER: "/user/rider",
          ROLE_CAREGIVER: "/user/caregiver",
          ROLE_VOLUNTEER: "/user/volunteer",
          // Add more authority types and corresponding routes as needed
        };

        for (const authority of authorities) {
          if (authorityRoutes[authority.authority]) {
            // Redirect to the corresponding route
            navigate(authorityRoutes[authority.authority]);
            return; // Stop further checking if a match is found
          }
        }
      } else {
        console.error("Invalid response:", response);
        // Handle unexpected response structure here
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
    // Handle login error here
  };

  return (
    <div className="container flex login-con">
      <section className="login-form">
        <h2>Welcome Back!</h2>
        <p>Login!</p>
        <form>
          <input
            type="email"
            value={email}
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" className="btn primary" onClick={handleLogin}>
            Login
          </button>
        </form>
      </section>
      <img src={LoginImage} alt="Volunteer Team Image" />
    </div>
  );
};

export default Login;
