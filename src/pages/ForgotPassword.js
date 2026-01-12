import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  console.log("ForgotPassword component rendered");

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2 className="forgot-title">Forgot Password</h2>
        <p className="forgot-subtitle">
          Enter your email to reset your password
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="forgot-input"
        />

        <button className="forgot-button">
          Send Reset Link
        </button>

        <p className="forgot-back" onClick={() => navigate("/login")}>
          ← Back to Login
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
