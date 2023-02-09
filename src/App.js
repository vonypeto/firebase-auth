import { Routes, Route, Navigate, withRouter } from "react-router-dom";

import Signup from "./components/Signup";
import Login from "./components/Login";
import UpdateProfile from "./components/UpdateProfile";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";

import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<PrivateRoute />}>
                <Route exact path="/" element={<Dashboard />} />
              </Route>
              <Route path="/login" element={<Login />} />

              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              <Route path="/update-profile" element={<PrivateRoute />}>
                <Route path="/update-profile" element={<UpdateProfile />} />
              </Route>
            </Routes>
          </AuthProvider>
        </div>
      </Container>
    </div>
  );
}
export default App;
