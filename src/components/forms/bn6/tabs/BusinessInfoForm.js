import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const BusinessInfoForm = ({ formData, handleChange }) => {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">1. NAME OF BUSINESS</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="business_name"
              value={formData.business_name}
              onChange={handleChange}
              placeholder="Name of Business"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
            1A. BUSINESS REGISTRATION NUMBER
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="number"
              name="registration_number"
              value={formData.registration_number}
              onChange={handleChange}
              placeholder="Enter registration number"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">2. PRINCIPAL ADDRESS</Form.Label>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Street/District</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="street_district" className="mb-0">
            <Form.Control
              type="text"
              name="street_district"
              value={formData.street_district}
              onChange={handleChange}
              placeholder="Street/District"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Post Office</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="post_office" className="mb-0">
            <Form.Control
              type="text"
              name="post_office"
              value={formData.post_office}
              onChange={handleChange}
              placeholder="Post Office"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Town</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="town" className="mb-0">
            <Form.Control
              type="text"
              name="town"
              value={formData.town}
              onChange={handleChange}
              placeholder="Town"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Parish</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="parish" className="mb-0">
            <Form.Control
              type="text"
              name="parish"
              value={formData.parish}
              onChange={handleChange}
              placeholder="Parish"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="d-flex align-items-center">
          <Form.Label className="mb-0">3. CONTACT NUMBER</Form.Label>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="d-flex align-items-center">
          <Form.Label className="mb-0">Telephone</Form.Label>
        </Col>
        <Col md={3}>
          <Form.Group controlId="telephone" className="mb-0">
            <Form.Control
              type="number"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Enter your number"
              required
            />
          </Form.Group>
        </Col>
        <Col md={3} className="d-flex align-items-center">
          <Form.Label className="mb-0">Fax</Form.Label>
        </Col>
        <Col md={3}>
          <Form.Group controlId="fax" className="mb-0">
            <Form.Control
              type="number"
              name="fax"
              value={formData.fax}
              onChange={handleChange}
              placeholder="Enter your fax number"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
            3. BUSINESS TAXPAYER REGISTRATION NUMBER (TRN)
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="trn" className="mb-0">
            <Form.Control
              type="number"
              name="trn"
              value={formData.trn}
              onChange={handleChange}
              placeholder="Enter your trn number"
              required
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default BusinessInfoForm;
