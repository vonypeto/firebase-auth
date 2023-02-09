import { Routes, Route, Navigate, withRouter } from "react-router-dom";

import Signup from "./components/Signup";
import Login from "./components/Login";
import UpdateProfile from "./components/UpdateProfile";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";

import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./layout";

function App() {
  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <AuthProvider>
            {/* L */}
            <Routes>
              <Route exact path="/" element={<PrivateRoute />}>
                <Route exact path="/" element={<Layout />}>
                  <Route exact path="/home" element={<Dashboard />} />
                  <Route path="/update-profile" element={<UpdateProfile />} />
                  <Route path="/" element={<Navigate replace to="/home" />} />
                </Route>
              </Route>

              {/* Login  */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              <Route path="/" element={<Navigate replace to="/login" />} />
            </Routes>
          </AuthProvider>
        </div>
      </Container>
    </div>
  );
}
export default App;
