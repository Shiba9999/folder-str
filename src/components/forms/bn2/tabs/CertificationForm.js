import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

const CertificationForm = ({
  certificationData,
  certificationDataChange,
  expiryDate,
  handleExpiryDateChange,
}) => {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Field or Profession</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="field_or_profession"
              value={certificationData.field_or_profession}
              onChange={certificationDataChange}
              placeholder="Field or Profession"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Expiry Date:</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <DatePicker
              selected={expiryDate}
              className="form-control"
              dateFormat="dd-MM-yyyy"
              onChange={handleExpiryDateChange}
              placeholderText="Select a Date"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Certifying Body:</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="certifying_body"
              value={certificationData.certifying_body}
              onChange={certificationDataChange}
              placeholder=" Certifying Body"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Certification # (optional)</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="certification"
              value={certificationData.certification}
              onChange={certificationDataChange}
              placeholder=" Certification"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
          Have you provided the relevant certification as a part of your application?
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="certificationProvided" className="mb-0">
            <Form.Check
              inline
              type="radio"
              label="Yes"
              name="certification_provided"
              id="certificationYes"
              value="Yes"
              checked={certificationData.certification_provided === "Yes"}
              onChange={certificationDataChange}
            />
            <Form.Check
              inline
              type="radio"
              label="No"
              name="certification_provided"
              id="certificationNo"
              value="No"
              checked={certificationData.certification_provided === "No"}
              onChange={certificationDataChange}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default CertificationForm;
