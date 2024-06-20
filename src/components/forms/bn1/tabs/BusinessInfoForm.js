import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

const BusinessInfoForm = ({
  formData,
  handleChange,
  commencementDate,
  renewalDate,
  handleDateChange,
  handleRenewalDateChange,
}) => {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Enter Registration Number</Form.Label>
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
          <Form.Label className="mb-0">Name of Business</Form.Label>
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
            Number of Other business name under which business will be carried
            out
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="number"
              name="other_business_number"
              value={formData.other_business_number}
              onChange={handleChange}
              placeholder="Number of Other business"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Date of Commencement</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <DatePicker
              selected={commencementDate}
              className="form-control"
              dateFormat="dd-MM-yyyy"
              onChange={handleDateChange}
              placeholderText="Select a Date"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Effective date of Renewal</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <DatePicker
              selected={renewalDate}
              className="form-control"
              dateFormat="dd-MM-yyyy"
              onChange={handleRenewalDateChange}
              placeholderText="Select a Date"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">General Nature of business: </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="business_nature"
              value={formData.business_nature}
              onChange={handleChange}
              placeholder="General Nature of business"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">General Nature of business </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="business_of_nature"
              value={formData.business_of_nature}
              onChange={handleChange}
              placeholder="General Nature of business"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
            Principal Address of the Business:{" "}
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="business_address"
              value={formData.business_address}
              onChange={handleChange}
              placeholder="Principal Address of the Business"
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
              value={formData.business_address2}
              onChange={handleChange}
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
          <Form.Group controlId="contactInformation" className="mb-0">
            <Form.Control
              type="text"
              name="contact_information"
              value={formData.contact_information}
              onChange={handleChange}
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
          <Form.Group controlId="telephone2" className="mb-0">
            <Form.Control
              type="text"
              name="telephone2"
              value={formData.telephone2}
              onChange={handleChange}
              placeholder="Telephone 2 "
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Fax</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="fax" className="mb-0">
            <Form.Control
              type="text"
              name="fax"
              value={formData.fax}
              onChange={handleChange}
              placeholder="Fax (Optional)"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
            Branches for the Business (Are there branches from which the
            business will be/ is being conducted)
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessBranches" className="mb-0">
            <Form.Check
              inline
              type="radio"
              label="Yes"
              name="business_branches"
              id="businessBranchesYes"
              value="Yes"
              checked={formData.business_branches === "Yes"}
              onChange={handleChange}
            />
            <Form.Check
              inline
              type="radio"
              label="No"
              name="business_branches"
              id="businessBranchesNo"
              value="No"
              checked={formData.business_branches === "No"}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
            Is there any changes to Name, address, or activity carried on by the
            business?
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="changeName" className="mb-0">
            <Form.Check
              inline
              type="radio"
              label="Yes"
              name="change_name"
              id="changeNameYes"
              value="Yes"
              checked={formData.change_name === "Yes"}
              onChange={handleChange}
            />
            <Form.Check
              inline
              type="radio"
              label="No"
              name="change_name"
              id="changeNameNo"
              value="No"
              checked={formData.change_name === "No"}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default BusinessInfoForm;
