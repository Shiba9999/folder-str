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
import CertificationForm from "./tabs/CertificationForm";
import ApplicantDetailsForm from "./tabs/ApplicantDetailsForm";
import DeclarationForm from "./tabs/DeclarationForm";
import SignatureForm from "./tabs/SignatureForm";

const BN2Form = () => {
  const [activeTab, setActiveTab] = useState("business-info");
  const [formData, setFormData] = useState({
    business_name: "",
    proposed_name: "",
    other_business_name: "",
    commencement_date: "",
    renewal_date: "",
    justification_proposed_business: "",
    business_nature: "",
    sale_of: "",
    type_of_service: "",
    street: "",
    post_office: "",
    city: "",
    parish: "",
    tel: "",
    tel2: "",
    fax: "",
    business_branches: "",
    name_under_branch: "",
    branch_address_street: "",
    branch_address_post_office: "",
    branch_address_city: "",
    branch_address_parish: "",
    nature_of_business: "",
  });

  const [commencementDate, setCommencementDate] = useState(null);
  const [renewalDate, setRenewalDate] = useState(null);

  const [certificationData, setCertificationData] = useState({
    field_or_profession: "",
    expiry_date: "",
    certifying_body: "",
    certification: "",
    certification_provided: ""
  });

  const [expiryDate, setExpiryDate] = useState(null);

  const [applicant1SignatureDate, setApplicant1SignatureDate] = useState(null);
  const [applicant2SignatureDate, setApplicant2SignatureDate] = useState(null);

  const applicantFormerCheckboxChange = (e) => {
    const { name, value, type, checked } = e.target;

    setPerticularApplicant((prevPerticularApplicant) => ({
      ...prevPerticularApplicant,
      [name]: checked ? value : null,
    }));
  };

  const scheduleWithParticularsCheckbokChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPerticularApplicant((prevPerticularApplicant) => ({
      ...prevPerticularApplicant,
      [name]: checked ? value : null,
    }));
  };

  const [perticularApplicant, setPerticularApplicant] = useState({
    applicant1_christian: "",
    applicant1_middle: "",
    applicant1_surname: "",
    applicant2_christian: "",
    applicant2_middle: "",
    applicant2_surname: "",
    former_applicant1_christian: "",
    former_applicant1_surname: "",
    applicant1_former: "",
    former_applicant2_christian: "",
    former_applicant2_surname: "",
    applicant2_former: "",
    applicant1_street: "",
    applicant1_city: "",
    applicant1_post_office: "",
    applicant1_parish: "",
    applicant2_street: "",
    applicant2_city: "",
    applicant2_post_office: "",
    applicant2_parish: "",
    applicant1_home_contact: "",
    applicant1_mobile: "",
    applicant2_home_contact: "",
    applicant2_mobile: "",
    applicant1_trn: "",
    applicant2_trn: "",
    applicant1_business_occupation: "",
    applicant2_business_occupation: "",
    applicant1_nationality: "",
    applicant1_nationality_of_origin: "",
    applicant2_nationality: "",
    applicant2_nationality_of_origin: "",
    applicant1_signature: "",
    applicant1_signature_date: "",
    applicant2_signature: "",
    applicant2_signature_date: "",
    schedule_with_particulars: ""
  });

  const [declaration, setDeclaration] = useState({
    name: "",
    address: "",
    contact: "",
    email: ""
  });

  const [signature, setSignature] = useState({
    valid_identification: null,
    proof_of_residential_address: null,
    verification_of_trn: null,
    proof_of_certification: null,
    work_permit: null,
    other: "",
    coj_sign: "",
    expiry_date: ""
  });

  const [expiryDateSign, setExpiryDateSign] = useState(null);

  const validChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    if (
      type === "checkbox" &&
      (name === "valid_identification" ||
        name === "proof_of_residential_address" ||
        name === "verification_of_trn")
    ) {
      const newValue = value === "Yes";
      setSignature((prevSignature) => ({
        ...prevSignature,
        [name]: checked ? newValue : null,
      }));
    } else if (
      type === "checkbox" &&
      (name === "proof_of_certification" || name === "work_permit")
    ) {
      const newValue = value;

      setSignature((prevSignature) => ({
        ...prevSignature,
        [name]: checked ? newValue : null,
      }));
    } else {
      setSignature((prevSignature) => ({
        ...prevSignature,
        [name]: value,
      }));
    }
  };

  const handleDateChange = (Date) => {
    setCommencementDate(Date);
    if (Date) {
      formData.commencement_date = Date;
    } else {
      formData.commencement_date = "";
    }
  };

  const handleRenewalDateChange = (Date) => {
    setRenewalDate(Date);
    if (Date) {
      formData.renewal_date = Date;
    } else {
      formData.renewal_date = "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleExpiryDateChange = (Date) => {
    setExpiryDate(Date);
    if (Date) {
      certificationData.expiry_date = Date;
    } else {
      certificationData.expiry_date = "";
    }
  };

  const applicant1HandleDateChange = (Date) => {
    setApplicant1SignatureDate(Date);
    if (Date) {
      perticularApplicant.applicant1_signature_date = Date;
    } else {
      perticularApplicant.applicant1_signature_date = "";
    }
  };

  const applicant2HandleDateChange = (Date) => {
    setApplicant2SignatureDate(Date);
    if (Date) {
      perticularApplicant.applicant2_signature_date = Date;
    } else {
      perticularApplicant.applicant2_signature_date = "";
    }
  };

  const handleExpiryDateSignChange = (Date) => {
    setExpiryDateSign(Date);
    if (Date) {
      signature.expiry_date = Date;
    } else {
      signature.expiry_date = "";
    }
  };

  const certificationDataChange = (e) => {
    const { name, value } = e.target;
    setCertificationData({
      ...certificationData,
      [name]: value,
    });
  };

  const applicantChangeHandler = (e) => {
    const { name, value } = e.target;
    setPerticularApplicant({
      ...perticularApplicant,
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
  const signatureChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignature({
      ...signature,
      [name]: value,
    });
  };

  const calculatePercentage = () => {
    const {
      business_name,
      proposed_name,
      other_business_name,
      commencement_date,
      renewal_date,
      justification_proposed_business,
      business_nature,
      sale_of,
      type_of_service,
      street,
      post_office,
      city,
      parish,
      tel,
      tel2,
      fax,
      business_branches,
      name_under_branch,
      branch_address_street,
      branch_address_post_office,
      branch_address_city,
      branch_address_parish,
      nature_of_business
    } = formData;
    const filledFields = [
      business_name,
      proposed_name,
      other_business_name,
      commencement_date,
      renewal_date,
      justification_proposed_business,
      business_nature,
      sale_of,
      type_of_service,
      street,
      post_office,
      city,
      parish,
      tel,
      tel2,
      fax,
      business_branches,
      name_under_branch,
      branch_address_street,
      branch_address_post_office,
      branch_address_city,
      branch_address_parish,
      nature_of_business
    ].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 23) * 100);
  };

  const certificationPercentage = () => {
    const {
      field_or_profession,
      expiry_date,
      certifying_body,
      certification,
      certification_provided
    } = certificationData;
    const filledFields = [
      field_or_profession,
      expiry_date,
      certifying_body,
      certification,
      certification_provided
    ].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 5) * 100);
  };

  const applicantPercentage = () => {
    const {
      applicant1_christian,
      applicant1_middle,
      applicant1_surname,
      applicant2_christian,
      applicant2_middle,
      applicant2_surname,
      former_applicant1_christian,
      former_applicant1_surname,
      applicant1_former,
      former_applicant2_christian,
      former_applicant2_surname,
      applicant2_former,
      applicant1_street,
      applicant1_city,
      applicant1_post_office,
      applicant1_parish,
      applicant2_street,
      applicant2_city,
      applicant2_post_office,
      applicant2_parish,
      applicant1_home_contact,
      applicant1_mobile,
      applicant2_home_contact,
      applicant2_mobile,
      applicant1_trn,
      applicant2_trn,
      applicant1_business_occupation,
      applicant2_business_occupation,
      applicant1_nationality,
      applicant1_nationality_of_origin,
      applicant2_nationality,
      applicant2_nationality_of_origin,
      applicant1_signature,
      applicant1_signature_date,
      applicant2_signature,
      applicant2_signature_date,
      schedule_with_particulars
    } = perticularApplicant;
    const filledFields = [
      applicant1_christian,
      applicant1_middle,
      applicant1_surname,
      applicant2_christian,
      applicant2_middle,
      applicant2_surname,
      former_applicant1_christian,
      former_applicant1_surname,
      applicant1_former,
      former_applicant2_christian,
      former_applicant2_surname,
      applicant2_former,
      applicant1_street,
      applicant1_city,
      applicant1_post_office,
      applicant1_parish,
      applicant2_street,
      applicant2_city,
      applicant2_post_office,
      applicant2_parish,
      applicant1_home_contact,
      applicant1_mobile,
      applicant2_home_contact,
      applicant2_mobile,
      applicant1_trn,
      applicant2_trn,
      applicant1_business_occupation,
      applicant2_business_occupation,
      applicant1_nationality,
      applicant1_nationality_of_origin,
      applicant2_nationality,
      applicant2_nationality_of_origin,
      applicant1_signature,
      applicant1_signature_date,
      applicant2_signature,
      applicant2_signature_date,
      schedule_with_particulars
    ].filter((field) => field !== "" && field !== null).length;
    return Math.ceil((filledFields / 37) * 100);
  };

  const declarationPercentage = () => {
    const {
      name,
      address,
      contact,
      email
    } = declaration;
    const filledFields = [
      name,
      address,
      contact,
      email
    ].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 4) * 100);
  };

  const signaturePercentage = () => {
    const {
      valid_identification,
      proof_of_residential_address,
      verification_of_trn,
      proof_of_certification,
      work_permit,
      other,
      coj_sign,
      expiry_date
    } = signature;
    const filledFields = [
      valid_identification,
      proof_of_residential_address,
      verification_of_trn,
      proof_of_certification,
      work_permit,
      other,
      coj_sign,
      expiry_date
    ].filter((field) => field !== "" && field !== null).length;
    return Math.ceil((filledFields / 8) * 100);
  };

  const tabs = [
    "business-info",
    "certification",
    "particulars-of-applicant",
    "declaration",
    "signature",
  ];
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
      <h3 className="mb-4">Registration Of Business Names Act Application For Registration By Partnership</h3>
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
              eventKey="certification"
              onClick={() => setActiveTab("certification")}
              className={`${
                activeTab === "certification" ? "bg-primary text-white " : ""
              }`}
            >
              Certification
              <ProgressBar
                now={certificationPercentage()}
                label={`${certificationPercentage()}%`}
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="particulars-of-applicant"
              onClick={() => setActiveTab("particulars-of-applicant")}
              className={`${
                activeTab === "particulars-of-applicant"
                  ? "bg-primary text-white "
                  : ""
              }`}
            >
              Particulars of Applicant
              <ProgressBar
                now={applicantPercentage()}
                label={`${applicantPercentage()}%`}
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
              Particulars of Individual/Company filing form with the Registrar
              <ProgressBar
                now={declarationPercentage()}
                label={`${declarationPercentage()}%`}
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
                  commencementDate={commencementDate}
                  renewalDate={renewalDate}
                  handleDateChange={handleDateChange}
                  handleRenewalDateChange={handleRenewalDateChange}
                />
              </Tab.Pane>

              <Tab.Pane eventKey="certification">
                <CertificationForm
                  certificationData={certificationData}
                  certificationDataChange={certificationDataChange}
                  expiryDate={expiryDate}
                  handleExpiryDateChange={handleExpiryDateChange}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="particulars-of-applicant">
                <ApplicantDetailsForm
                  perticularApplicant={perticularApplicant}
                  applicantChangeHandler={applicantChangeHandler}
                  applicantFormerCheckboxChange={applicantFormerCheckboxChange}
                  applicant1SignatureDate={applicant1SignatureDate}
                  applicant1HandleDateChange={applicant1HandleDateChange}
                  applicant2SignatureDate={applicant2SignatureDate}
                  applicant2HandleDateChange={applicant2HandleDateChange}
                  scheduleWithParticularsCheckbokChange={scheduleWithParticularsCheckbokChange}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="declaration">
                <DeclarationForm
                  declaration={declaration}
                  handleDeclarationChange={handleDeclarationChange}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="signature">
                <SignatureForm
                  signature={signature}
                  signatureChangeHandler={signatureChangeHandler}
                  expiryDateSign={expiryDateSign}
                  handleExpiryDateSignChange={handleExpiryDateSignChange}
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

export default BN2Form;
