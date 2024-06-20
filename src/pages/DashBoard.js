import React from "react";
import { Nav, Container } from "react-bootstrap";
import { Route, Routes, Navigate, useNavigate, useLocation, Outlet } from "react-router-dom";
import BN1Form from "../components/forms/bn1/BN1Form";
import BN2Form from "../components/forms/bn2/BN2Form";
import BN3Form from "../components/forms/bn3/BN3Form";
import BN6Form from "../components/forms/bn6/BN6Form";


const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelect = (eventKey) => {
    navigate(eventKey);
  };

  return (
    <Container>
      <Nav variant="tabs" activeKey={location.pathname} onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="/dashboard/bn1">BN1 Form</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/dashboard/bn2">BN2 Form</Nav.Link>
        </Nav.Item>
         <Nav.Item>
          <Nav.Link eventKey="/dashboard/bn3">BN3 Form</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/dashboard/bn6">BN6 Form</Nav.Link>
        </Nav.Item> 
      </Nav>
      <div>
        <Routes>
          <Route path="bn1" element={<BN1Form />} />
          <Route path="bn2" element={<BN2Form />} />
           <Route path="bn3" element={<BN3Form />} />
          <Route path="bn6" element={<BN6Form />} /> 
          <Route path="/" element={<Navigate to="bn1" />} />
        </Routes>
        <Outlet />
      </div>
    </Container>
  );
};

export default Dashboard;
