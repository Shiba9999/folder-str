import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

const WorkPermitForm = ({
  workPermitData,
  permitChangeHandler,
  expiryDateWorkPermit,
  handleExpiryDateWorkPermitChange,
}) => {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
            Whether permit is required to carry on business
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="permitRequired" className="mb-0">
            <Form.Check
              inline
              type="radio"
              label="Yes"
              name="permit_required"
              id="permitRequiredYes"
              value="Yes"
              checked={workPermitData.permit_required === "Yes"}
              onChange={permitChangeHandler}
            />
            <Form.Check
              inline
              type="radio"
              label="No"
              name="permit_required"
              id="permitRequiredNo"
              value="No"
              checked={workPermitData.permit_required === "No"}
              onChange={permitChangeHandler}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Work permit number</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="number"
              name="permit_number"
              value={workPermitData.permit_number}
              onChange={permitChangeHandler}
              placeholder="Work permit number"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Expiry date of work permit</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <DatePicker
              selected={expiryDateWorkPermit}
              className="form-control"
              dateFormat="dd-MM-yyyy"
              onChange={handleExpiryDateWorkPermitChange}
              placeholderText="Select a Date"
              required
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default WorkPermitForm;
