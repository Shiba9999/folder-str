import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import DashBoard from "./pages/DashBoard";
import { Container } from "react-bootstrap";

const MainContent = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <div
      className="wrapper mx-auto"
      style={{ maxWidth: "1200px", padding: "0 15px" }}
    >
      {!isLoginPage && <Header />}
      <Container
        className="mx-auto"
        style={{ maxWidth: "1200px", padding: "0 15px" }}
      >
        <div className="main-content">
          <div className="content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard/*" element={<DashBoard />} />
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </div>
      </Container>
      {!isLoginPage && <Footer />}
    </div>
  );
};

const App = () => (
  <Router>
    <MainContent />
  </Router>
);

export default App;
