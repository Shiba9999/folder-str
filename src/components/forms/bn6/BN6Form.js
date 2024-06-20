import React, { useState } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Tab,
  Nav,
  ProgressBar,
} from "react-bootstrap";
import BusinessInfoForm from "./tabs/BusinessInfoForm";
import DeclarationForm from "./tabs/DeclarationForm"
import IndividualsAuthorizedClosureForm from "./tabs/IndividualsAuthorizedClosureForm"
import SignatureForm from "./tabs/SignatureForm"



const BN6Form = () => {
  const [activeTab, setActiveTab] = useState("business-info");
  const [formData, setFormData] = useState({
    registration_number: "",
    street_district: "",
    post_office: "",
    town: "",
    parish: "",
    telephone: "",
    fax: "",
    trn: "",
    business_name: "",
  });
  const [declaration, setDeclaration] = useState({
    closure_reason: "",
    closure_date: "",
  });
  const [closureDate, setClosureDate] = useState(null);

  const [individual1SignatureDate, setIndividual1SignatureDate] =
    useState(null);
  const [individual2SignatureDate, setIndividual2SignatureDate] =
    useState(null);

  const [individuals, setIndividuals] = useState({
    individual1_surname: "",
    individual1_christian_name: "",
    individual1_middle_name: "",
    individual1_indicate_capacity: "",
    individual1_registration_number: "",
    individual1_signature: "",
    individual1_signature_date: "",
    individual2_surname: "",
    individual2_christian_name: "",
    individual2_middle_name: "",
    individual2_indicate_capacity: "",
    individual2_registration_number: "",
    individual2_signature: "",
    individual2_signature_date: "",
  });

  const [signature, setSignature] = useState({
    valid_identification: null,
    verification_address: null,
    certification_attached: null,
    verification_trn: null,
    work_permit: null,
    other: null,
    other_certify: "",
    officer_signature: "",
    signature_date: "",
  });

  const [dateSign, setDateSign] = useState(null);

  const tabs = ["business-info", "declaration", "individuals", "signature"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDeclarationChange = (e) => {
    const { name, value } = e.target;
    setDeclaration({
      ...declaration,
      [name]: value,
    });
  };

  const handleClosureDateChange = (Date) => {
    setClosureDate(Date);
    if (Date) {
      declaration.closure_date = Date;
    } else {
      declaration.closure_date = "";
    }
  };

  const validChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = value;
    setSignature((prevSignature) => ({
      ...prevSignature,
      [name]: checked ? newValue : null,
    }));
  };

  const individual1HandleDateChange = (Date) => {
    setIndividual1SignatureDate(Date);
    if (Date) {
      individuals.individual1_signature_date = Date;
    } else {
      individuals.individual1_signature_date = "";
    }
  };

  const individual2HandleDateChange = (Date) => {
    setIndividual2SignatureDate(Date);
    if (Date) {
      individuals.individual2_signature_date = Date;
    } else {
      individuals.individual2_signature_date = "";
    }
  };

  const handleDateSignChange = (Date) => {
    setDateSign(Date);
    if (Date) {
      signature.signature_date = Date;
    } else {
      signature.signature_date = "";
    }
  };

  const handleIndividualChange = (e) => {
    const { name, value } = e.target;
    setIndividuals({
      ...individuals,
      [name]: value,
    });
  };

  const signatureChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignature({
      ...signature,
      [name]: value,
    });
  };

  const calculatePercentage = () => {
    const {
      registration_number,
      business_name,
      street_district,
      post_office,
      town,
      parish,
      telephone,
      fax,
      trn,
    } = formData;
    const filledFields = [
      registration_number,
      street_district,
      post_office,
      town,
      parish,
      telephone,
      fax,
      trn,
      business_name,
    ].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 9) * 100);
  };

  const declarationPercentage = () => {
    const { closure_reason, closure_date } = declaration;
    const filledFields = [closure_reason, closure_date].filter(
      (field) => field !== ""
    ).length;
    return Math.ceil((filledFields / 2) * 100);
  };

  const individualsPercentage = () => {
    const {
      individual1_surname,
      individual1_christian_name,
      individual1_middle_name,
      individual1_indicate_capacity,
      individual1_registration_number,
      individual1_signature,
      individual1_signature_date,
      individual2_surname,
      individual2_christian_name,
      individual2_middle_name,
      individual2_indicate_capacity,
      individual2_registration_number,
      individual2_signature,
      individual2_signature_date,
    } = individuals;
    const filledFields = [
      individual1_surname,
      individual1_christian_name,
      individual1_middle_name,
      individual1_indicate_capacity,
      individual1_registration_number,
      individual1_signature,
      individual1_signature_date,
      individual2_surname,
      individual2_christian_name,
      individual2_middle_name,
      individual2_indicate_capacity,
      individual2_registration_number,
      individual2_signature,
      individual2_signature_date,
    ].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 14) * 100);
  };

  const signaturePercentage = () => {
    const {
      valid_identification,
      verification_address,
      certification_attached,
      verification_trn,
      work_permit,
      other,
      other_certify,
      officer_signature,
      signature_date,
    } = signature;
    const filledFields = [
      valid_identification,
      verification_address,
      certification_attached,
      verification_trn,
      work_permit,
      other,
      other_certify,
      officer_signature,
      signature_date,
    ].filter((field) => field !== "" && field !== null).length;
    return Math.ceil((filledFields / 9) * 100);
  };

  const handleNext = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  return (
    <Container>
      <h2 className="mb-4">Business Name Registration Form</h2>
      <Tab.Container id="registration-tabs" activeKey={activeTab}>
        <Nav variant="pills" className="justify-content-center mb-3">
          <Nav.Item>
            <Nav.Link
              eventKey="business-info"
              onClick={() => setActiveTab("business-info")}
              className={`${
                activeTab === "business-info" ? "bg-primary text-white " : ""
              }`}
            >
              Business Information
              <ProgressBar
                now={calculatePercentage()}
                label={`${calculatePercentage()}%`}
              />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              eventKey="declaration"
              onClick={() => setActiveTab("declaration")}
              className={`${
                activeTab === "declaration" ? "bg-primary text-white " : ""
              }`}
            >
              PARTICULARS RELATIONG TO CLOSURE
              <ProgressBar
                now={declarationPercentage()}
                label={`${declarationPercentage()}%`}
              />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              eventKey="individuals"
              onClick={() => setActiveTab("individuals")}
              className={`${
                activeTab === "individuals" ? "bg-primary text-white " : ""
              }`}
            >
              Particulars Of Individuals Authorized To Notify Of Closure
              <ProgressBar
                now={individualsPercentage()}
                label={`${individualsPercentage()}%`}
              />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              eventKey="signature"
              onClick={() => setActiveTab("signature")}
              className={`${
                activeTab === "signature" ? "bg-primary text-white " : ""
              }`}
            >
              For Officer Use Only
              <ProgressBar
                now={signaturePercentage()}
                label={`${signaturePercentage()}%`}
              />
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row>
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="business-info">
                <BusinessInfoForm
                  formData={formData}
                  handleChange={handleChange}
                />
              </Tab.Pane>

              <Tab.Pane eventKey="declaration">
                <DeclarationForm
                  declaration={declaration}
                  handleDeclarationChange={handleDeclarationChange}
                  closureDate={closureDate}
                  handleClosureDateChange={handleClosureDateChange}
                />
              </Tab.Pane>

              <Tab.Pane eventKey="individuals">
                <IndividualsAuthorizedClosureForm
                  individuals={individuals}
                  handleIndividualChange={handleIndividualChange}
                  individual1SignatureDate={individual1SignatureDate}
                  individual1HandleDateChange={individual1HandleDateChange}
                  individual2SignatureDate={individual2SignatureDate}
                  individual2HandleDateChange={individual2HandleDateChange}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="signature">
                <SignatureForm
                  signature={signature}
                  signatureChangeHandler={signatureChangeHandler}
                  dateSign={dateSign}
                  handleDateSignChange={handleDateSignChange}
                  validChangeHandler={validChangeHandler}
                />
              </Tab.Pane>
            </Tab.Content>
            <div className="mt-4 d-flex justify-content-center ">
              <Button
                className="mr-5"
                variant="secondary"
                disabled={tabs.indexOf(activeTab) === 0}
                onClick={handlePrev}
              >
                Previous
              </Button>
              <Button
                variant="primary"
                disabled={tabs.indexOf(activeTab) === tabs.length - 1}
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default BN6Form;
