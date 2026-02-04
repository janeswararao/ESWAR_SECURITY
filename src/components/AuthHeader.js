import "./Header.css";
import logo from "../assets/images/eswar-security.png";
import { useNavigate } from "react-router-dom";

function AuthHeader() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <header className="cf-header">
            <div className="cf-left" onClick={() => navigate("/dashboard")}>
                <img src={logo} alt="Eswar Security" className="cf-logo" />
            </div>


            <div className="cf-right">
                <span className="cf-user">Hi, {user?.name}</span>
                <button className="cf-login" onClick={logout}>
                    Logout
                </button>
            </div>
        </header>
    );
}

export default AuthHeader;
