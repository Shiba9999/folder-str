import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

const ApplicantDetailsForm = ({
  perticularApplicant,
  applicantChangeHandler,
  applicantFormerCheckboxChange,
  applicant1SignatureDate,
  applicant1HandleDateChange,
  applicant2SignatureDate,
  applicant2HandleDateChange,
  scheduleWithParticularsCheckbokChange
}) => {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={2}></Col>
        <Col md={5}>APPLICANT #1</Col>
        <Col md={5}>APPLICANT #2</Col>
      </Row>
      <Row className="mb-3">
        <Col md={2}>1. Name</Col>
        <Col md={5}>
          <Form.Label className="mb-0">
          Christian:
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant1_christian"
              value={perticularApplicant.applicant1_christian}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Label className="mb-0">
            Middle:
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant1_middle"
              value={perticularApplicant.applicant1_middle}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Label className="mb-0">
            Surname:
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant1_surname"
              value={perticularApplicant.applicant1_surname}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
        </Col>
        <Col md={5}>
          <Form.Label className="mb-0">
            Christian:
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant2_christian"
              value={perticularApplicant.applicant2_christian}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Label className="mb-0">
            Middle:
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant2_middle"
              value={perticularApplicant.applicant2_middle}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Label className="mb-0">
            Surname:
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant2_surname"
              value={perticularApplicant.applicant2_surname}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={2}>1A. Former Christian / Surname</Col>
        <Col md={5}>
          <Form.Label className="mb-0">
          Christian:
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="former_applicant1_christian"
              value={perticularApplicant.former_applicant1_christian}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Label className="mb-0">
            Surname:
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="former_applicant1_surname"
              value={perticularApplicant.former_applicant1_surname}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group className="mb-0">
            <div className="d-flex align-items-center">
              {["Marriage", "Deed poll"].map(
                (role, i) => (
                  <Form.Check
                    key={i}
                    type="checkbox"
                    label={role}
                    name="applicant1_former"
                    checked={perticularApplicant.applicant1_former===role}
                    value={role}
                    onChange={applicantFormerCheckboxChange}
                    style={{ marginRight: "10px" }}
                  />
                )
              )}
            </div>
          </Form.Group>
        </Col>
        <Col md={5}>
          <Form.Label className="mb-0">
            Christian:
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="former_applicant2_christian"
              value={perticularApplicant.former_applicant2_christian}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Label className="mb-0">
            Surname:
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="former_applicant2_surname"
              value={perticularApplicant.former_applicant2_surname}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group className="mb-0">
            <div className="d-flex align-items-center">
              {["Marriage", "Deed poll"].map(
                (role, i) => (
                  <Form.Check
                    key={i}
                    type="checkbox"
                    label={role}
                    name="applicant2_former"
                    checked={perticularApplicant.applicant2_former===role}
                    value={role}
                    onChange={applicantFormerCheckboxChange}
                    style={{ marginRight: "10px" }}
                  />
                )
              )}
            </div>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={2}>2. Residential Address</Col>
        <Col md={5}>
          <Form.Label className="mb-0">
            Street/ District/Apt/
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant1_street"
              value={perticularApplicant.applicant1_street}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Label className="mb-0">
            Town/ City
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant1_city"
              value={perticularApplicant.applicant1_city}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Label className="mb-0">
            Post Office
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant1_post_office"
              value={perticularApplicant.applicant1_post_office}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Label className="mb-0">
            Parish
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant1_parish"
              value={perticularApplicant.applicant1_parish}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
        </Col>
        <Col md={5}>
        <Form.Label className="mb-0">
            Street/ District/Apt/
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant2_street"
              value={perticularApplicant.applicant2_street}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Label className="mb-0">
            Town/ City
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant2_city"
              value={perticularApplicant.applicant2_city}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Label className="mb-0">
            Post Office
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant2_post_office"
              value={perticularApplicant.applicant2_post_office}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Label className="mb-0">
            Parish
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant2_parish"
              value={perticularApplicant.applicant2_parish}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={2}>3. Contact #</Col>
        <Col md={5}>
          <Form.Label className="mb-0">
            Home/ Office #
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant1_home_contact"
              value={perticularApplicant.applicant1_home_contact}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Label className="mb-0">
            Mobile #
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant1_mobile"
              value={perticularApplicant.applicant1_mobile}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
        </Col>
        <Col md={5}>
          <Form.Label className="mb-0">
            Home/ Office #
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant2_home_contact"
              value={perticularApplicant.applicant2_home_contact}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Label className="mb-0">
            Mobile #
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant2_mobile"
              value={perticularApplicant.applicant2_mobile}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={2}>4. TRN</Col>
        <Col md={5}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant1_trn"
              value={perticularApplicant.applicant1_trn}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
        </Col>
        <Col md={5}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant2_trn"
              value={perticularApplicant.applicant2_trn}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={2}>5. Business Occupation</Col>
        <Col md={5}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant1_business_occupation"
              value={perticularApplicant.applicant1_business_occupation}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
        </Col>
        <Col md={5}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant2_business_occupation"
              value={perticularApplicant.applicant2_business_occupation}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={2}>6. Nationality</Col>
        <Col md={5}>
          <Form.Label className="mb-0">
            Nationality
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant1_nationality"
              value={perticularApplicant.applicant1_nationality}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Label className="mb-0">
            Nationality of origin
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant1_nationality_of_origin"
              value={perticularApplicant.applicant1_nationality_of_origin}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
        </Col>
        <Col md={5}>
          <Form.Label className="mb-0">
            Nationality
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant2_nationality"
              value={perticularApplicant.applicant2_nationality}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Label className="mb-0">
            Nationality of origin
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant2_nationality_of_origin"
              value={perticularApplicant.applicant2_nationality_of_origin}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>7. I, the undersigned, hereby apply for registration pursuant to the provisions of the Business Names Act 1934 as amended, and 
        for that purpose declare all statement of particulars furnished on this form to be true to the best of my knowledge and belief.</Col>
      </Row>
      <Row className="mb-3">
        <Col md={2}></Col>
        <Col md={5}>
          <Form.Label className="mb-0">
            Signature
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant1_signature"
              value={perticularApplicant.applicant1_signature}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group controlId="businessName" className="mb-0 pt-1">
            <DatePicker
              selected={applicant1SignatureDate}
              className="form-control"
              dateFormat="dd/MM/yyyy"
              onChange={applicant1HandleDateChange}
              placeholderText="Date (dd/mm/yy)"
              required
            />
          </Form.Group>
        </Col>
        <Col md={5}>
          <Form.Label className="mb-0">
            Signature
          </Form.Label>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="applicant2_signature"
              value={perticularApplicant.applicant2_signature}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group controlId="businessName" className="mb-0 pt-1">
            <DatePicker
              selected={applicant2SignatureDate}
              className="form-control"
              dateFormat="dd/MM/yyyy"
              onChange={applicant2HandleDateChange}
              placeholderText="Date (dd/mm/yy)"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <Form.Check
              type="checkbox"
              label="Schedule with particulars of additional partners attached"
              name="schedule_with_particulars"
              checked={perticularApplicant.schedule_with_particulars}
              value="Yes"
              onChange={scheduleWithParticularsCheckbokChange}
              style={{ marginRight: "10px" }}
            />
        </Col>
      </Row>
    </Form>
  );
};

export default ApplicantDetailsForm;
