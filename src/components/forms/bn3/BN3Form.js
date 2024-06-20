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
import SignatureForm from "./tabs/SignatureForm";
import CompanyDetailsForm from "./tabs/CompanyDetailsForm";

const BN3Form = () => {
  const [activeTab, setActiveTab] = useState("business-info");
  const [businessInfo, setBusinessInfo] = useState({
    business_name: "",
    other_business_name: "",
    other_business_name_bussiness_carriedout: "",
    commencement_date: "",
    business_name_justification: "",
    sale_of: "",
    type_of_service: "",
    district: "",
    post_office: "",
    city_town: "",
    parish: "",
    num_one: "",
    num_two: "",
    fax: "",
    business_branches: "",
    branch_name: "",
    branch_district: "",
    branch_post_office: "",
    branch_town: "",
    branch_parish: "",
    nature_of_business: "",
  });
  const [commencementDate, setCommencementDate] = useState(null);
  const [renewalDate, setRenewalDate] = useState(null);
  const [certificationData, setCertificationData] = useState({
    certification_provided: "",
    field_or_profession: "",
    expiry_date: "",
    certifying_body: "",
    certification: "",
  });
  const [expiryDate, setExpiryDate] = useState(null);

  const [stateData, setStateData] = useState({
    officerData: [
      { name: "", trn: "", capacity: [], signature: "", date: "" },
      { name: "", trn: "", capacity: [], signature: "", date: "" },
    ],
    officerDates: ["", ""],
    workPermitData: {
      registered_company_name: "",
      company_registration: "",
      registration_number: "",
      num_one: "",
      num_two: "",
      fax: "",
      branch_district: "",
      branch_post_office: "",
      branch_town: "",
      branch_parish: "",
      expiry_date: "",
    },
  });
  const [expiryDateWorkPermit, setExpiryDateWorkPermit] = useState(null);

  const [perticularApplicant, setPerticularApplicant] = useState({
    name: "",
    address: "",
    contact: "",
    email_address: "",
  });

  const [signature, setSignature] = useState({
    other: "",
    coj_sign: "",
    expiry_date: "",
    valid_identification: null,
    proof_of_residential_address: null,
    verification_of_trn: null,
    proof_of_certification: null,
    work_permit: null,
  });

  const [expiryDateSign, setExpiryDateSign] = useState(null);

  const tabs = [
    "business-info",
    "certification",
    "company-details",
    "particulars-of-applicant",
    "signature",
  ];

  const officerChangeHandler = (e, index) => {
    const { name, value, checked } = e.target;
    const updatedOfficers = [...stateData.officerData];

    if (name.includes("capacity")) {
      const capacityValue = value;
      if (checked) {
        updatedOfficers[index].capacity = [capacityValue];
      } else {
        updatedOfficers[index].capacity = [];
      }
    } else {
      updatedOfficers[index][name] = value;
    }

    setStateData({ ...stateData, officerData: updatedOfficers });
  };

  const handleDateChangeOfficer = (date, index) => {
    const updatedDates = [...stateData.officerDates];
    updatedDates[index] = date;
    setStateData({ ...stateData, officerDates: updatedDates });
  };

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
      businessInfo.commencement_date = Date;
    } else {
      businessInfo.commencement_date = "";
    }
  };

  const handleRenewalDateChange = (Date) => {
    setRenewalDate(Date);
    if (Date) {
      businessInfo.renewal_date = Date;
    } else {
      businessInfo.renewal_date = "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBusinessInfo({
      ...businessInfo,
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

  const certificationDataChange = (e) => {
    const { name, value } = e.target;
    setCertificationData({
      ...certificationData,
      [name]: value,
    });
  };

  const handleExpiryDateWorkPermitChange = (Date) => {
    setExpiryDateWorkPermit(Date);
    if (Date) {
      stateData.workPermitData.expiry_date = Date;
    } else {
      stateData.workPermitData.expiry_date = "";
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

  const permitChangeHandler = (e) => {
    const { name, value } = e.target;
    setStateData({
      ...stateData,
      workPermitData: {
        ...stateData.workPermitData,
        [name]: value,
      },
    });
  };

  const applicantChangeHandler = (e) => {
    const { name, value } = e.target;
    setPerticularApplicant({
      ...perticularApplicant,
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
      other_business_name,
      other_business_name_bussiness_carriedout,
      commencement_date,
      business_name_justification,
      sale_of,
      type_of_service,
      district,
      post_office,
      city_town,
      parish,
      num_one,
      num_two,
      fax,
      business_branches,
      branch_name,
      branch_district,
      branch_post_office,
      branch_town,
      branch_parish,
      nature_of_business,
    } = businessInfo;
    const filledFields = [
      business_name,
      other_business_name,
      other_business_name_bussiness_carriedout,
      commencement_date,
      business_name_justification,
      sale_of,
      type_of_service,
      district,
      post_office,
      city_town,
      parish,
      num_one,
      num_two,
      fax,
      business_branches,
      branch_name,
      branch_district,
      branch_post_office,
      branch_town,
      branch_parish,
      nature_of_business,
    ].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 21) * 100);
  };

  const certificationPercentage = () => {
    const {
      certification_provided,
      field_or_profession,
      expiry_date,
      certifying_body,
      certification,
    } = certificationData;
    const filledFields = [
      certification_provided,
      field_or_profession,
      expiry_date,
      certifying_body,
      certification,
    ].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 5) * 100);
  };

  const workPermitPercentage = () => {
    const { officerData, workPermitData, officerDates } = stateData;
    const filledFields = [
      workPermitData.registered_company_name,
      workPermitData.company_registration,
      workPermitData.registration_number,
      workPermitData.num_one,
      workPermitData.num_two,
      workPermitData.fax,
      workPermitData.branch_district,
      workPermitData.branch_post_office,
      workPermitData.branch_town,
      workPermitData.branch_parish,
      workPermitData.expiry_date,
      officerData[0].name,
      officerData[0].trn,
      officerData[0].capacity.join(", "),
      officerData[0].signature,
      officerDates[0],
      officerData[1].name,
      officerData[1].trn,
      officerData[1].capacity.join(", "),
      officerData[1].signature,
      officerDates[1],
    ].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 21) * 100);
  };

  const applicantPercentage = () => {
    const { name, address, contact, email_address } = perticularApplicant;
    const filledFields = [name, address, contact, email_address].filter(
      (field) => field !== ""
    ).length;
    return Math.ceil((filledFields / 4) * 100);
  };

  const signaturePercentage = () => {
    const {
      other,
      coj_sign,
      expiry_date,
      valid_identification,
      proof_of_residential_address,
      verification_of_trn,
      proof_of_certification,
      work_permit,
    } = signature;
    const filledFields = [
      other,
      coj_sign,
      expiry_date,
      valid_identification,
      proof_of_residential_address,
      verification_of_trn,
      proof_of_certification,
      work_permit,
    ].filter((field) => field !== "" && field !== null).length;

    return Math.ceil((filledFields / 8) * 100);
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
      <h4 className="mb-4">REGISTRATION OF BUSINESS NAMES ACT</h4>
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
              BUSINESS INFORMATION
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
              CERTIFICATION
              <ProgressBar
                now={certificationPercentage()}
                label={`${certificationPercentage()}%`}
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="company-details"
              onClick={() => setActiveTab("company-details")}
              className={`${
                activeTab === "company-details" ? "bg-primary text-white " : ""
              }`}
            >
              PARTICULARS OF COMPANY REGISTERING BUSINESS NAME
              <ProgressBar
                now={workPermitPercentage()}
                label={`${workPermitPercentage()}%`}
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
              Particulars of individual/company filing form with the Registrar
              <ProgressBar
                now={applicantPercentage()}
                label={`${applicantPercentage()}%`}
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
              INSTRUCTIONS FOR COMPLETION OF BN 3
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
                  businessInfo={businessInfo}
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

              <Tab.Pane eventKey="company-details">
                <CompanyDetailsForm
                  workPermitData={stateData.workPermitData}
                  permitChangeHandler={permitChangeHandler}
                  expiryDateWorkPermit={expiryDateWorkPermit}
                  handleExpiryDateWorkPermitChange={
                    handleExpiryDateWorkPermitChange
                  }
                  officerData={stateData.officerData}
                  officerChangeHandler={officerChangeHandler}
                  handleDateChangeOfficer={handleDateChangeOfficer}
                  officerDate={stateData.officerDates}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="particulars-of-applicant">
                <ApplicantDetailsForm
                  perticularApplicant={perticularApplicant}
                  applicantChangeHandler={applicantChangeHandler}
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

export default BN3Form;
