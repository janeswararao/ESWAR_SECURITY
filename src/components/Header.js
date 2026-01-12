import "./Header.css";
import logo from "../assets/images/eswar-security.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="cf-header">
      {/* LEFT → LOGO (HOME) */}
      <div
        className="cf-left"
        onClick={() => navigate("/")}
        role="button"
        tabIndex={0}
      >
        <img src={logo} alt="Eswar Security" className="cf-logo" />
      </div>

      {/* CENTER */}
      <nav className="cf-nav">
        <a href="#">Platform</a>
        <a href="#">Products</a>
        <a href="#">Developers</a>
        <a href="#">Resources</a>
        <a href="#">Company</a>
      </nav>

      {/* RIGHT */}
      <div className="cf-right">
        <span className="cf-link">contact : 9533991446</span>

        <button
          className="cf-login"
          onClick={() => navigate("/login")}
        >
          Log in
        </button>

        <button className="cf-sales" onClick={() => navigate("/signup")}>
          Sign up
</button>
      </div>
    </header>
  );
}

export default Header;
