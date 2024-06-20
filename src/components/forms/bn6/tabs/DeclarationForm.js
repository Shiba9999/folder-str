import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

const DeclarationForm = ({
  declaration,
  handleDeclarationChange,
  closureDate,
  handleClosureDateChange,
}) => {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
            4. REASON FOR CESSATION (CLOSURE)
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="closure_reason" className="mb-0">
            <Form.Control
              style={{
                height: "96px",
                width: "100%",
                whiteSpace: "pre-wrap",
              }}
              name="closure_reason"
              value={declaration.closure_reason}
              onChange={handleDeclarationChange}
              as="textarea"
              placeholder=" "
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
            {" "}
            5. DATE OF CESSATION (CLOSURE)
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <DatePicker
              selected={closureDate}
              className="form-control"
              dateFormat="dd-MM-yyyy"
              onChange={handleClosureDateChange}
              placeholderText="Select a Date"
              required
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default DeclarationForm;
