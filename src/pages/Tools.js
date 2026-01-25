import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Tools() {
    const [tools, setTools] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        fetch("http://localhost:5000/api/dashboard/tools", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.tools) {
                    setTools(data.tools);
                } else {
                    navigate("/login");
                }
            });
    }, [navigate]);

    return (
        <div style={{ color: "white", paddingTop: "120px" }}>
            <h1>Security Tools</h1>
            <ul>
                {tools.map((tool, i) => (
                    <li key={i}>{tool}</li>
                ))}
            </ul>
        </div>
    );
}

export default Tools;
