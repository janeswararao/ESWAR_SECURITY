import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // 1️⃣ STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 2️⃣ LOGIN API
  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Login successful");
        navigate("/dashboard");
      } else {
        alert(data.msg || "Login failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">Secure access to Eswar Security</p>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* FORGOT PASSWORD */}
        <p
          className="forgot-password"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot password?
        </p>

        {/* LOGIN BUTTON */}
        <button className="login-button" onClick={handleLogin}>
          Log in
        </button>

        {/* SIGNUP */}
        <p className="login-footer">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
