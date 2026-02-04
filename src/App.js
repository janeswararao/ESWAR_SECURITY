import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

// Import components
import PublicHeader from "./components/PublicHeader";
import AuthHeader from "./components/AuthHeader";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Tools from "./pages/Tools";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  const authPages = ["/dashboard", "/tools"];

  const isAuthPage = authPages.includes(location.pathname);

  return (
    <div className="App">
      {/* HEADER SWITCH */}
      {token && isAuthPage ? <AuthHeader /> : <PublicHeader />}

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* PROTECTED */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tools"
          element={
            <ProtectedRoute>
              <Tools />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
