import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const ApplicantDetailsForm = ({
  perticularApplicant,
  applicantChangeHandler,
}) => {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
            Name of individual (Christian name, Middle name and Surname)
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="name_of_indivisual"
              value={perticularApplicant.name_of_indivisual}
              onChange={applicantChangeHandler}
              placeholder=""
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Former Christian name</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="former_christian_name"
              value={perticularApplicant.former_christian_name}
              onChange={applicantChangeHandler}
              placeholder="Former Christian name"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Former Surname</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="former_surname"
              value={perticularApplicant.former_surname}
              onChange={applicantChangeHandler}
              placeholder="Former Surname"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Place of residence</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="place_of_residence"
              value={perticularApplicant.place_of_residence}
              onChange={applicantChangeHandler}
              placeholder="Place of residence"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Address Line 2: </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="business_address2"
              value={perticularApplicant.business_address2}
              onChange={applicantChangeHandler}
              placeholder="Optional Address"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Contact Information</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="contact_info"
              value={perticularApplicant.contact_info}
              onChange={applicantChangeHandler}
              placeholder="Contact Information"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Telephone 2</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="fax" className="mb-0">
            <Form.Control
              type="text"
              name="telephone_2"
              value={perticularApplicant.telephone_2}
              onChange={applicantChangeHandler}
              placeholder="Telephone 2 (Optional)"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Other Business Occupation</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="other_bussiness_occupation"
              value={perticularApplicant.other_bussiness_occupation}
              onChange={applicantChangeHandler}
              placeholder="Other Business Occupation"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Present Nationality</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="present_nationality"
              value={perticularApplicant.present_nationality}
              onChange={applicantChangeHandler}
              placeholder="Present Nationality"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Nationality of Origin</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="nationality_of_origin"
              value={perticularApplicant.nationality_of_origin}
              onChange={applicantChangeHandler}
              placeholder="Nationality of Origin"
              required
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default ApplicantDetailsForm;
