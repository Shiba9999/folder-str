import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

const CompanyDetailsForm = ({
  workPermitData,
  permitChangeHandler,
  expiryDateWorkPermit,
  handleExpiryDateWorkPermitChange,
  officerData,
  officerChangeHandler,
  handleDateChangeOfficer,
  officerDate,
}) => {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
            {" "}
            1. Name of registered company
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registered_company_name" className="mb-0">
            <Form.Control
              type="text"
              name="registered_company_name"
              value={workPermitData.registered_company_name}
              onChange={permitChangeHandler}
              placeholder="Enter Registered Company Name"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0"> 2. Company Registration #</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="company_registration" className="mb-0">
            <Form.Control
              type="text"
              name="company_registration"
              value={workPermitData.company_registration}
              onChange={permitChangeHandler}
              placeholder=" "
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">
            3. Company Taxpayer Registration Number (TRN)
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="registration_number" className="mb-0">
            <Form.Control
              type="number"
              name="registration_number"
              value={workPermitData.registration_number}
              onChange={permitChangeHandler}
              placeholder="Enter your registration number"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">3. Contact numbers:</Form.Label>
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
              value={workPermitData.num_one}
              onChange={permitChangeHandler}
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
              value={workPermitData.num_two}
              onChange={permitChangeHandler}
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
              value={workPermitData.fax}
              onChange={permitChangeHandler}
              placeholder="Enter your fax number"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">4. Registered Office Address</Form.Label>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          <Form.Label className="mb-0">Street/District</Form.Label>
        </Col>
        <Col md={6}>
          <Form.Group controlId="branch_district" className="mb-0">
            <Form.Control
              type="text"
              name="branch_district"
              value={workPermitData.branch_district}
              onChange={permitChangeHandler}
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
              value={workPermitData.branch_post_office}
              onChange={permitChangeHandler}
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
              value={workPermitData.branch_town}
              onChange={permitChangeHandler}
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
              value={workPermitData.branch_parish}
              onChange={permitChangeHandler}
              placeholder=" "
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
              selected={expiryDateWorkPermit}
              className="form-control"
              dateFormat="dd-MM-yyyy"
              onChange={handleExpiryDateWorkPermitChange}
              placeholderText="Select a Date"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <h5>5. Two officers are required to sign on behalf of company</h5>

      {officerData.map((officer, index) => (
        <div key={index}>
          <h6>{`Name (${index + 1})`}</h6>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId={`name${index}`} className="mb-0">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={officer.name}
                  onChange={(e) => officerChangeHandler(e, index)}
                  placeholder="Enter Officer Name"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId={`trn${index}`} className="mb-0">
                <Form.Label>TRN</Form.Label>
                <Form.Control
                  type="text"
                  name="trn"
                  value={officer.trn}
                  onChange={(e) => officerChangeHandler(e, index)}
                  placeholder="Enter TRN"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId={`capacity${index}`} className="mb-0">
                <Form.Label>Capacity</Form.Label>
                <div className="d-flex align-items-center">
                  {["Director", "Secretary", "Authorized Official"].map(
                    (role, i) => (
                      <Form.Check
                        key={i}
                        type="checkbox"
                        label={role}
                        name="capacity"
                        value={role}
                        checked={officer.capacity.includes(role)}
                        onChange={(e) => officerChangeHandler(e, index)}
                        style={{ marginRight: "10px" }}
                      />
                    )
                  )}
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3 align-items-center">
            <Col md={6}>
              <Form.Group controlId={`signature${index}`} className="mb-0">
                <Form.Label>Signature</Form.Label>
                <Form.Control
                  type="text"
                  name="signature"
                  value={officer.signature}
                  onChange={(e) => officerChangeHandler(e, index)}
                  placeholder="Signature"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId={`date${index}`} className="  ">
                <Form.Label>Date</Form.Label>
                <div style={{ marginTop: "3px" }}>
                  <DatePicker
                    selected={officerDate[index]}
                    className="form-control"
                    dateFormat="dd-MM-yyyy"
                    onChange={(date) => handleDateChangeOfficer(date, index)}
                    placeholderText="Select a Date"
                    required
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
        </div>
      ))}
    </Form>
  );
};

export default CompanyDetailsForm;
