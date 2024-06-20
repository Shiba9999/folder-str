import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

const SignatureForm = ({
  signature,
  signatureChangeHandler,
  expiryDateSign,
  handleExpiryDateSignChange,
  validChangeHandler,
}) => {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Valid Identification</Form.Label>
        </Col>
        <Col md={6}>
        <div className="d-flex align-items-center">
            <Form.Check
              type="checkbox"
              label="1."
              name="valid_identification"
              checked={signature.valid_identification === true}
              value="Yes"
              onChange={validChangeHandler}
              className="me-3"
              style={{ marginRight: "10px" }}
            />
            <Form.Check
              type="checkbox"
              label="2."
              name="valid_identification"
              checked={signature.valid_identification === false}
              value="No"
              onChange={validChangeHandler}
              style={{ marginRight: "10px" }}
            />
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Proof of residential address</Form.Label>
        </Col>
        <Col md={6}>
          <div className="d-flex align-items-center">
            <Form.Check
              type="checkbox"
              label="1."
              name="proof_of_residential_address"
              checked={signature.proof_of_residential_address === true}
              value="Yes"
              onChange={validChangeHandler}
              className="me-3"
              style={{ marginRight: "10px" }}
            />
            <Form.Check
              type="checkbox"
              label="2."
              name="proof_of_residential_address"
              checked={signature.proof_of_residential_address === false}
              value="No"
              onChange={validChangeHandler}
              style={{ marginRight: "10px" }}
            />
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Verification of TRN</Form.Label>
        </Col>
        <Col md={6}>
          <div className="d-flex align-items-center">
            <Form.Check
              type="checkbox"
              label="1."
              name="verification_of_trn"
              checked={signature.verification_of_trn === true}
              value="Yes"
              onChange={validChangeHandler}
              className="me-3"
              style={{ marginRight: "10px" }}
            />
            <Form.Check
              type="checkbox"
              label="2."
              name="verification_of_trn"
              checked={signature.verification_of_trn === false}
              value="No"
              onChange={validChangeHandler}
              style={{ marginRight: "10px" }}
            />
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Proof of certification</Form.Label>
        </Col>
        <Col md={6}>
          <div className="d-flex align-items-center">
            <Form.Check
              type="checkbox"
              label="Attached"
              name="proof_of_certification"
              checked={signature.proof_of_certification === "Attached"}
              value="Attached"
              onChange={validChangeHandler}
              className="me-3"
              style={{ marginRight: "10px" }}
            />
            <Form.Check
              type="checkbox"
              label="Not required"
              name="proof_of_certification"
              checked={signature.proof_of_certification === "Not required"}
              value="Not required"
              onChange={validChangeHandler}
              style={{ marginRight: "10px" }}
            />
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Work Permit</Form.Label>
        </Col>
        <Col md={6}>
          <div className="d-flex align-items-center">
            <Form.Check
              type="checkbox"
              label="Attached"
              name="work_permit"
              checked={signature.work_permit === "Attached"}
              value="Attached"
              onChange={validChangeHandler}
              className="me-3"
              style={{ marginRight: "10px" }}
            />
            <Form.Check
              type="checkbox"
              label="To be provided"
              name="work_permit"
              checked={signature.work_permit === "To be provided"}
              value="To be provided"
              onChange={validChangeHandler}
              className="me-3"
              style={{ marginRight: "10px" }}
            />
            <Form.Check
              type="checkbox"
              label="Not required"
              name="work_permit"
              checked={signature.work_permit === "Not required"}
              value="Not required"
              onChange={validChangeHandler}
              style={{ marginRight: "10px" }}
            />
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Other</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="other" className="mb-0">
            <Form.Control
              type="text"
              name="other"
              value={signature.other}
              onChange={signatureChangeHandler}
              placeholder="Signatory Details"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">COJ Officer(Signature/stamp)</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="coj_sign" className="mb-0">
            <Form.Control
              type="text"
              name="coj_sign"
              value={signature.coj_sign}
              onChange={signatureChangeHandler}
              placeholder="Checkbox Signature"
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
              selected={expiryDateSign}
              className="form-control"
              dateFormat="dd-MM-yyyy"
              onChange={handleExpiryDateSignChange}
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
