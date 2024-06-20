import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

const IndividualsAuthorizedClosureForm = ({ individuals, handleIndividualChange, individual1SignatureDate, individual1HandleDateChange, individual2SignatureDate, individual2HandleDateChange }) => {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={12}>
          <p>I, hereby declare all statement of particulars regarding the closure of the registered business furnished on this form to be true 
          to the best of my (our) knowledge, information and belief.</p>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">1. NAME OF INDIVIDUAL #1:</Form.Label>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">SURNAME:</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="particularsOfIndividual" className="mb-0">
            <Form.Control
              type="text"
              name="individual1_surname"
              value={individuals.individual1_surname}
              onChange={handleIndividualChange}
              placeholder="Enter Surname"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">CHRISTIAN NAME:</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="particularsOfIndividual" className="mb-0">
            <Form.Control
              type="text"
              name="individual1_christian_name"
              value={individuals.individual1_christian_name}
              onChange={handleIndividualChange}
              placeholder="Enter Christian Name"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">MIDDLE NAME(S)</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="particularsOfIndividual" className="mb-0">
            <Form.Control
              type="text"
              name="individual1_middle_name"
              value={individuals.individual1_middle_name}
              onChange={handleIndividualChange}
              placeholder="Enter Middle Name"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
          1A. INDICATE CAPACITY:
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessBranches" className="mb-0">
            <Form.Check
              inline
              type="radio"
              label="BUSINESS OWNER"
              name="individual1_indicate_capacity"
              id="businessBranchesYes"
              value="BUSINESS OWNER"
              checked={individuals.individual1_indicate_capacity === "BUSINESS OWNER"}
              onChange={handleIndividualChange}
            />
            <Form.Check
              inline
              type="radio"
              label="DIRECTOR"
              name="individual1_indicate_capacity"
              id="businessBranchesNo"
              value="DIRECTOR"
              checked={individuals.individual1_indicate_capacity === "DIRECTOR"}
              onChange={handleIndividualChange}
            />
            <Form.Check
              inline
              type="radio"
              label="SECRETARY"
              name="individual1_indicate_capacity"
              id="businessBranchesNo"
              value="SECRETARY"
              checked={individuals.individual1_indicate_capacity === "SECRETARY"}
              onChange={handleIndividualChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">1B. TAXPAYER REGISTRATION NUMBER (TRN)</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="particularsOfIndividual" className="mb-0">
            <Form.Control
              type="text"
              name="individual1_registration_number"
              value={individuals.individual1_registration_number}
              onChange={handleIndividualChange}
              placeholder="Enter Taxpayer Registration Number (TRN)"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">SIGNATURE</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="particularsOfIndividual" className="mb-0">
            <Form.Control
              type="text"
              name="individual1_signature"
              value={individuals.individual1_signature}
              onChange={handleIndividualChange}
              placeholder="Enter Signature"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">DATE</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="particularsOfIndividual" className="mb-0">
            <DatePicker
              selected={individual1SignatureDate}
              className="form-control"
              dateFormat="dd/MM/yyyy"
              onChange={individual1HandleDateChange}
              placeholderText="Date (dd/mm/yy)"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">2. NAME OF INDIVIDUAL #2:</Form.Label>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">SURNAME:</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="particularsOfIndividual" className="mb-0">
            <Form.Control
              type="text"
              name="individual2_surname"
              value={individuals.individual2_surname}
              onChange={handleIndividualChange}
              placeholder="Enter Surname"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">CHRISTIAN NAME:</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="particularsOfIndividual" className="mb-0">
            <Form.Control
              type="text"
              name="individual2_christian_name"
              value={individuals.individual2_christian_name}
              onChange={handleIndividualChange}
              placeholder="Enter Christian Name"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">MIDDLE NAME(S)</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="particularsOfIndividual" className="mb-0">
            <Form.Control
              type="text"
              name="individual2_middle_name"
              value={individuals.individual2_middle_name}
              onChange={handleIndividualChange}
              placeholder="Enter Middle Name"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
          1A. INDICATE CAPACITY:
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessBranches" className="mb-0">
            <Form.Check
              inline
              type="radio"
              label="BUSINESS OWNER"
              name="individual2_indicate_capacity"
              id="businessBranchesYes"
              value="BUSINESS OWNER"
              checked={individuals.individual2_indicate_capacity === "BUSINESS OWNER"}
              onChange={handleIndividualChange}
            />
            <Form.Check
              inline
              type="radio"
              label="DIRECTOR"
              name="individual2_indicate_capacity"
              id="businessBranchesNo"
              value="DIRECTOR"
              checked={individuals.individual2_indicate_capacity === "DIRECTOR"}
              onChange={handleIndividualChange}
            />
            <Form.Check
              inline
              type="radio"
              label="SECRETARY"
              name="individual2_indicate_capacity"
              id="businessBranchesNo"
              value="SECRETARY"
              checked={individuals.individual2_indicate_capacity === "SECRETARY"}
              onChange={handleIndividualChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">1B. TAXPAYER REGISTRATION NUMBER (TRN)</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="particularsOfIndividual" className="mb-0">
            <Form.Control
              type="text"
              name="individual2_registration_number"
              value={individuals.individual2_registration_number}
              onChange={handleIndividualChange}
              placeholder="Enter Taxpayer Registration Number (TRN)"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">SIGNATURE</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="particularsOfIndividual" className="mb-0">
            <Form.Control
              type="text"
              name="individual2_signature"
              value={individuals.individual2_signature}
              onChange={handleIndividualChange}
              placeholder="Enter Signature"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">DATE</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="particularsOfIndividual" className="mb-0">
            <DatePicker
              selected={individual2SignatureDate}
              className="form-control"
              dateFormat="dd/MM/yyyy"
              onChange={individual2HandleDateChange}
              placeholderText="Date (dd/mm/yy)"
              required
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default IndividualsAuthorizedClosureForm;
