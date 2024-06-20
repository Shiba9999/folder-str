import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const DeclarationForm = ({ declaration, handleDeclarationChange }) => {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Name</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="particularsOfIndividual" className="mb-0">
            <Form.Control
              type="text"
              name="name"
              value={declaration.name}
              onChange={handleDeclarationChange}
              placeholder="Enter Name"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Address</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="particularsOfIndividual" className="mb-0">
            <Form.Control
              type="text"
              name="address"
              value={declaration.address}
              onChange={handleDeclarationChange}
              placeholder="Enter Address"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Contact</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="particularsOfIndividual" className="mb-0">
            <Form.Control
              type="number"
              name="contact"
              value={declaration.contact}
              onChange={handleDeclarationChange}
              placeholder="Enter Contact Number"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Email address</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="particularsOfIndividual" className="mb-0">
            <Form.Control
              type="text"
              name="email"
              value={declaration.email}
              onChange={handleDeclarationChange}
              placeholder="Enter Email Address"
              required
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default DeclarationForm;
