import "./Header.css";
import logo from "../assets/images/eswar-security.png";
import { useNavigate } from "react-router-dom";

function PublicHeader() {
    const navigate = useNavigate();

    return (
        <header className="cf-header">
            <div className="cf-left" onClick={() => navigate("/")}>
                <img src={logo} alt="Eswar Security" className="cf-logo" />
            </div>

            <nav className="cf-nav">
                <span>Platform</span>
                <span>Products</span>
                <span>Developers</span>
                <span>Resources</span>
                <span>Company</span>
            </nav>

            <div className="cf-right">
                <span className="cf-link">contact : 9533991446</span>
                <button className="cf-login" onClick={() => navigate("/login")}>
                    Log in
                </button>
                <button className="cf-sales" onClick={() => navigate("/signup")}>
                    Sign up
                </button>
            </div>
        </header>
    );
}

export default PublicHeader;
