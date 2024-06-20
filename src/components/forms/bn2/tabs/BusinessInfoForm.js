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
          <Form.Label className="mb-0">1. NAME OF THE BUSINESS</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="text"
              name="business_name"
              value={formData.business_name}
              onChange={handleChange}
              placeholder="Enter Business Name"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">1B. OTHER PROPOSED NAMES OF THE BUSINESS (IF THE NAME AT ITEM 1 IS REFUSED)</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="text"
              name="proposed_name"
              value={formData.proposed_name}
              onChange={handleChange}
              placeholder="Enter Proposed Name"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">1C. OTHER BUSINESS NAME UNDER WHICH BUSINESS WILL BE CARRIED OUT: THIS NAME WILL ALSO APPEAR ON THE CERTIFICATE 
          (Where applicable)</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="text"
              name="other_business_name"
              value={formData.other_business_name}
              onChange={handleChange}
              placeholder="Other Business Name"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">2. DATE OF COMMENCEMENT (Not a future date)</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
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
          <Form.Label className="mb-0">REGISTRATION # (FOR RENEWALS)</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
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
          <Form.Label className="mb-0">
          3. JUSTIFICATION OF PROPOSED BUSINESS NAME (where applicable)
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="text"
              name="justification_proposed_business"
              value={formData.justification_proposed_business}
              onChange={handleChange}
              placeholder="Number of Other business"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">4. GENERAL NATURE OF BUSINESS:</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
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
          <Form.Label className="mb-0">4A. Sale of:</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="text"
              name="sale_of"
              value={formData.sale_of}
              onChange={handleChange}
              placeholder="Sale Of"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">4B. Type of Service:</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="text"
              name="type_of_service"
              value={formData.type_of_service}
              onChange={handleChange}
              placeholder="Type of Service"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
          5. PRINCIPAL ADDRESS OF THE BUSINESS
          </Form.Label>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
          Street/District/Shop #/ Plaza
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder="Street/District/Shop #/ Plaza"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
          Post Office
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="text"
              name="post_office"
              value={formData.post_office}
              onChange={handleChange}
              placeholder="Post Office"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
          City/Town
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City/Town"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
          Parish
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="text"
              name="parish"
              value={formData.parish}
              onChange={handleChange}
              placeholder="Parish"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">6. CONTACT NUMBERS:</Form.Label>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Tel #</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="number"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              placeholder="Tel #"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Tel #2</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="number"
              name="tel2"
              value={formData.tel2}
              onChange={handleChange}
              placeholder="Tel #2"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Fax#</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="number"
              name="fax"
              value={formData.fax}
              onChange={handleChange}
              placeholder="Fax#"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
          7. BRANCHES FOR THE BUSINESS: Are there branches from which the business will be/ is being conducted?
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
          <Form.Label className="mb-0">7A. Name under which branch will operate</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="text"
              name="name_under_branch"
              value={formData.name_under_branch}
              onChange={handleChange}
              placeholder="Name under which branch will operate"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
          7b Address where branch will conduct trade
          </Form.Label>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
          Street/District/Shop #/ Plaza
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="text"
              name="branch_address_street"
              value={formData.branch_address_street}
              onChange={handleChange}
              placeholder="Street/District/Shop #/ Plaza"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
          Post Office
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="text"
              name="branch_address_post_office"
              value={formData.branch_address_post_office}
              onChange={handleChange}
              placeholder="Post Office"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
          City/Town
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="text"
              name="branch_address_city"
              value={formData.branch_address_city}
              onChange={handleChange}
              placeholder="City/Town"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
          Parish
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="text"
              name="branch_address_parish"
              value={formData.branch_address_parish}
              onChange={handleChange}
              placeholder="Parish"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
          7c. Nature of business to be conducted by branch
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="businessName" className="mb-0">
            <Form.Control
              type="text"
              name="nature_of_business"
              value={formData.nature_of_business}
              onChange={handleChange}
              placeholder="Nature of business to be conducted by branch"
              required
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default BusinessInfoForm;
