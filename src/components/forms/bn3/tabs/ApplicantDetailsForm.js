import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const ApplicantDetailsForm = ({
  perticularApplicant,
  applicantChangeHandler,
}) => {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Name</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="name" className="mb-0">
            <Form.Control
              type="text"
              name="name"
              value={perticularApplicant.name}
              onChange={applicantChangeHandler}
              placeholder=""
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
          <Form.Group controlId="address" className="mb-0">
            <Form.Control
              type="text"
              name="address"
              value={perticularApplicant.address}
              onChange={applicantChangeHandler}
              placeholder=" "
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Contact #</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="contact" className="mb-0">
            <Form.Control
              type="number"
              name="contact"
              value={perticularApplicant.contact}
              onChange={applicantChangeHandler}
              placeholder=" "
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
          <Form.Group controlId="email_address" className="mb-0">
            <Form.Control
              type="email"
              name="email_address"
              value={perticularApplicant.email_address}
              onChange={applicantChangeHandler}
              placeholder="Your Email Address"
              required
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default ApplicantDetailsForm;
