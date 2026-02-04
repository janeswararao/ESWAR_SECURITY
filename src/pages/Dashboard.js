import DashboardLayout from "../layouts/DashboardLayout";
import "./Dashboard.css";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="cards">
        <div className="card">🛡 Threats Detected<br />0</div>
        <div className="card">📊 Scans Run<br />0</div>
        <div className="card">⚠ Alerts<br />0</div>
        <div className="card">👤 Users<br />1</div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
