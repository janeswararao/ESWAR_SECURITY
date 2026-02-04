import { useNavigate } from "react-router-dom";
import "./Topbar.css";

function Topbar() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div className="topbar">
            <span>Dashboard</span>

            <div className="profile">
                <span>{user?.name}</span>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
}

export default Topbar;
