import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className="sidebar">
            <h2 className="logo">ES Security</h2>

            <nav>
                <button onClick={() => navigate("/dashboard")}>Dashboard</button>
                <button onClick={() => navigate("/tools")}>Security Tools</button>
                <button onClick={() => navigate("/reports")}>Reports</button>
                <button onClick={() => navigate("/users")}>Users</button>
                <button onClick={() => navigate("/settings")}>Settings</button>
            </nav>
        </div>
    );
}

export default Sidebar;
