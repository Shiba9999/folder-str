import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const DeclarationForm = ({ declaration, handleDeclarationChange }) => {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Declaration</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="declaration" className="mb-0">
            <Form.Control
              style={{
                height: "96px",
                width: "100%",
                whiteSpace: "pre-wrap",
              }}
              name="declaration"
              value={declaration}
              onChange={handleDeclarationChange}
              as="textarea"
              placeholder="Declaration"
              required
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default DeclarationForm;
