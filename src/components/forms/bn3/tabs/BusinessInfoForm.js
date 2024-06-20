import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

const BusinessInfoForm = ({
  businessInfo,
  handleChange,
  commencementDate,
  handleDateChange,
}) => {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">1. NAME OF THE BUSINESS</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="business_name" className="mb-0">
            <Form.Control
              type="text"
              name="business_name"
              value={businessInfo.business_name}
              onChange={handleChange}
              placeholder="Enter Business Name"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
            1B OTHER PROPOSED NAMES OF THE BUSINESS ( IF THE NAME AT ITEM 1 IS
            REFUSED)
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="other_business_name" className="mb-0">
            <Form.Control
              type="text"
              name="other_business_name"
              value={businessInfo.other_business_name}
              onChange={handleChange}
              placeholder="Other Proposed Names"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
            1C. OTHER BUSINESS NAME UNDER WHICH BUSINESS WILL BE CARRIED OUT:
            THIS NAME WILL ALSO APPEAR ON THE CERTIFICATE
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="other_business_name_bussiness_carriedout"
              value={businessInfo.other_business_name_bussiness_carriedout}
              onChange={handleChange}
              placeholder="Name of Other business "
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
            2. DATE OF COMMENCEMENT (Not a future date)
          </Form.Label>
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
          <Form.Label className="mb-0">
            3. JUSTIFICATION OF PROPOSED BUSINESS NAME (where applicable)
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registrationNumber" className="mb-0">
            <Form.Control
              type="text"
              name="business_name_justification"
              value={businessInfo.business_name_justification}
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
            4. GENERAL NATURE OF BUSINESS:
          </Form.Label>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">4A. Sale of:</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="saleOf" className="mb-0">
            <Form.Control
              type="text"
              name="sale_of"
              value={businessInfo.sale_of}
              onChange={handleChange}
              placeholder="Sale of"
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
          <Form.Group controlId="typeOfService" className="mb-0">
            <Form.Control
              type="text"
              name="type_of_service"
              value={businessInfo.type_of_service}
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
            5. PRINCIPAL ADDRESS OF THE BUSINESS:
          </Form.Label>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
            5A. Street/District/ Shop #/ Plaza
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="district" className="mb-0">
            <Form.Control
              type="text"
              name="district"
              value={businessInfo.district}
              onChange={handleChange}
              placeholder="district"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">5B. Post Office</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="post_office" className="mb-0">
            <Form.Control
              type="text"
              name="post_office"
              value={businessInfo.post_office}
              onChange={handleChange}
              placeholder="Post Office"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">5C. City/Town</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="city_town" className="mb-0">
            <Form.Control
              type="text"
              name="city_town"
              value={businessInfo.city_town}
              onChange={handleChange}
              placeholder="city/town"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">5D. Parish</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="parish" className="mb-0">
            <Form.Control
              type="text"
              name="parish"
              value={businessInfo.parish}
              onChange={handleChange}
              placeholder="parish"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">6. Contact numbers:</Form.Label>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Tel #</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="num_one" className="mb-0">
            <Form.Control
              type="number"
              name="num_one"
              value={businessInfo.num_one}
              onChange={handleChange}
              placeholder="Enter your number"
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
          <Form.Group controlId="num_two" className="mb-0">
            <Form.Control
              type="number"
              name="num_two"
              value={businessInfo.num_two}
              onChange={handleChange}
              placeholder="Enter your second number"
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
          <Form.Group controlId="fax" className="mb-0">
            <Form.Control
              type="number"
              name="fax"
              value={businessInfo.fax}
              onChange={handleChange}
              placeholder="Enter your fax number"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
            7. BRANCHES FOR THE BUSINESS: Are there branches from which the
            business will be/ is being conducted ?{" "}
            <span>
              (If yes, provide particulars relating to the name, nature and
              address of the first branch at 7a, 7b and 7c. If there are
              additional branches annex this information using a schedule.).
            </span>
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
              checked={businessInfo.business_branches === "Yes"}
              onChange={handleChange}
            />
            <Form.Check
              inline
              type="radio"
              label="No"
              name="business_branches"
              id="businessBranchesNo"
              value="No"
              checked={businessInfo.business_branches === "No"}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
            7A. Name under which branch will operate
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="branch_name" className="mb-0">
            <Form.Control
              type="text"
              name="branch_name"
              value={businessInfo.branch_name}
              onChange={handleChange}
              placeholder=" "
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
            Street/District/ Shop #/ Plaza
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="branch_district" className="mb-0">
            <Form.Control
              type="text"
              name="branch_district"
              value={businessInfo.branch_district}
              onChange={handleChange}
              placeholder="Branch District"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Post Office</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="branch_post_office" className="mb-0">
            <Form.Control
              type="text"
              name="branch_post_office"
              value={businessInfo.branch_post_office}
              onChange={handleChange}
              placeholder=" Branch Post Office"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Town</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="branch_town" className="mb-0">
            <Form.Control
              type="text"
              name="branch_town"
              value={businessInfo.branch_town}
              onChange={handleChange}
              placeholder="town name"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Parish</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="branch_parish" className="mb-0">
            <Form.Control
              type="text"
              name="branch_parish"
              value={businessInfo.branch_parish}
              onChange={handleChange}
              placeholder=" "
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
          <Form.Group controlId="nature_of_business" className="mb-0">
            <Form.Control
              type="text"
              name="nature_of_business"
              value={businessInfo.nature_of_business}
              onChange={handleChange}
              placeholder="General Nature of business"
              required
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default BusinessInfoForm;
