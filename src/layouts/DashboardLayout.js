import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function DashboardLayout({ children }) {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />

            <div style={{ marginLeft: "240px", width: "100%" }}>
                <Topbar />
                <div style={{ padding: "20px" }}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;
