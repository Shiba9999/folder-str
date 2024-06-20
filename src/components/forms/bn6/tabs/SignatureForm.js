import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

const SignatureForm = ({
  signature,
  signatureChangeHandler,
  dateSign,
  handleDateSignChange,
  validChangeHandler,
}) => {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={6}>
          <div className="d-flex align-items-center">
            <Form.Check
              type="checkbox"
              label="VALID IDENTIFICATION. State Type"
              name="valid_identification"
              checked={signature.valid_identification === "VALID IDENTIFICATION"}
              value="VALID IDENTIFICATION"
              onChange={validChangeHandler}
              className="me-3"
              style={{ marginRight: "10px" }}
            />
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <div className="d-flex align-items-center">
            <Form.Check
              type="checkbox"
              label="VERIFICATION OF ADDEESS"
              name="verification_address"
              checked={signature.verification_address === "VERIFICATION OF ADDEESS"}
              value="VERIFICATION OF ADDEESS"
              onChange={validChangeHandler}
              className="me-3"
              style={{ marginRight: "10px" }}
            />
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <div className="d-flex align-items-center">
            <Form.Check
              type="checkbox"
              label="PROOF OF CERTIFICATION ATTACHED"
              name="certification_attached"
              checked={signature.certification_attached === "PROOF OF CERTIFICATION ATTACHED"}
              value="PROOF OF CERTIFICATION ATTACHED"
              onChange={validChangeHandler}
              className="me-3"
              style={{ marginRight: "10px" }}
            />
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <div className="d-flex align-items-center">
            <Form.Check
              type="checkbox"
              label="VERIFICATION OF TRN"
              name="verification_trn"
              checked={signature.verification_trn === "VERIFICATION OF TRN"}
              value="VERIFICATION OF TRN"
              onChange={validChangeHandler}
              className="me-3"
              style={{ marginRight: "10px" }}
            />
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <div className="d-flex align-items-center">
            <Form.Check
              type="checkbox"
              label="WORK PERMIT"
              name="work_permit"
              checked={signature.work_permit === "WORK PERMIT"}
              value="WORK PERMIT"
              onChange={validChangeHandler}
              className="me-3"
              style={{ marginRight: "10px" }}
            />
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <Form.Check
              type="checkbox"
              label="OTHER. Please certify"
              name="other"
              checked={signature.other === "OTHER"}
              value="OTHER"
              onChange={validChangeHandler}
              className="me-3"
              style={{ marginRight: "10px" }}
            />
          </div>
        </Col>
        <Col md={6}>
          <Form.Group controlId="coj_sign" className="mb-0">
            <Form.Control
              type="text"
              name="other_certify"
              value={signature.other_certify}
              onChange={signatureChangeHandler}
              placeholder="Please Certify"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Officer Signature</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="coj_sign" className="mb-0">
            <Form.Control
              type="text"
              name="officer_signature"
              value={signature.officer_signature}
              onChange={signatureChangeHandler}
              placeholder="Officer Signature"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Date</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <DatePicker
              selected={dateSign}
              className="form-control"
              dateFormat="dd-MM-yyyy"
              onChange={handleDateSignChange}
              placeholderText="Select a Date"
              required
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default SignatureForm;
