import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const SignatureForm = ({ signature, signatureChangeHandler }) => {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Signatory Details</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="signatory_details"
              value={signature.signatory_details}
              onChange={signatureChangeHandler}
              placeholder="Signatory Details"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Checkbox Signature</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="checkbox_signature"
              value={signature.checkbox_signature}
              onChange={signatureChangeHandler}
              placeholder="Checkbox Signature"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Form>
        <Form.Group controlId="fileUpload" className="mb-3">
          <Form.Label>Upload File</Form.Label>
          <Form.Control
            style={{
              height: "96px",
              width: "100%",
              whiteSpace: "pre-wrap",
            }}
            name="file_upload"
            value={signature.file_upload}
            onChange={signatureChangeHandler}
            type="file"
          />
          <Form.Text className="text-muted">
            Please upload any necessary attachments here.
          </Form.Text>
        </Form.Group>
      </Form>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Secret Phrase</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="secret_phrase"
              value={signature.secret_phrase}
              onChange={signatureChangeHandler}
              placeholder="Secret Phrase"
              required
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default SignatureForm;
