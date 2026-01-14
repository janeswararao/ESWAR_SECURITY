import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">Secure access to Eswar Security</p>

        <input
          type="email"
          placeholder="Username or Email"
          className="login-input"
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />

        {/* FORGOT PASSWORD (WHITE TEXT) */}
        <p
          className="forgot-password"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot password?
        </p>

        <button className="login-button">Log in</button>

        <p className="login-footer">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
