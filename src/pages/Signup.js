import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">
          Join Eswar Security Platform
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="signup-input"
        />

        <input
          type="email"
          placeholder="Email"
          className="signup-input"
        />

        <input
          type="password"
          placeholder="Password"
          className="signup-input"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="signup-input"
        />

        <button className="signup-button">
          Sign up
        </button>

        <p className="signup-footer">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Log in</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
