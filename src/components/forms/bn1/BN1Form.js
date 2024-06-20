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
import WorkPermitForm from "./tabs/WorkPermitForm";
import ApplicantDetailsForm from "./tabs/ApplicantDetailsForm";
import AttachmentForm from "./tabs/AttachmentForm";
import DeclarationForm from "./tabs/DeclarationForm";
import SignatureForm from "./tabs/SignatureForm";

const BN1Form = () => {
  const [activeTab, setActiveTab] = useState("business-info");
  const [formData, setFormData] = useState({
    registration_number: "",
    business_name: "",
    other_business_number: "",
    commencement_date: "",
    renewal_date: "",
    business_nature: "",
    business_of_nature: "",
    business_address: "",
    contact_information: "",
    business_branches: "",
    change_name: "",
    business_address2: "",
    telephone2: "",
    fax: "",
  });

  const [commencementDate, setCommencementDate] = useState(null);
  const [renewalDate, setRenewalDate] = useState(null);

  const [certificationData, setCertificationData] = useState({
    certification_provided: "",
    field_or_profession: "",
    expiry_date: "",
    certifying_body: "",
    certification: "",
    certificate_number: "",
  });

  const [expiryDate, setExpiryDate] = useState(null);

  const [workPermitData, setWorkPermitData] = useState({
    permit_required: "",
    permit_number: "",
    expiry_date: "",
  });

  const [expiryDateWorkPermit, setExpiryDateWorkPermit] = useState(null);

  const [perticularApplicant, setPerticularApplicant] = useState({
    name_of_indivisual: "",
    former_christian_name: "",
    former_surname: "",
    place_of_residence: "",
    contact_info: "",
    other_bussiness_occupation: "",
    present_nationality: "",
    nationality_of_origin: "",
    business_address2: "",
    telephone_2: "",
  });
  const [attachmentFile, setAttachmentFile] = useState({
    file_upload: "",
  });
  const [declaration, setDeclaration] = useState("");
  const [signature, setSignature] = useState({
    signatory_details: "",
    checkbox_signature: "",
    file_upload: "",
    secret_phrase: "",
  });
  const tabs = [
    "business-info",
    "certification",
    "work-permit",
    "particulars-of-applicant",
    "attachments",
    "declaration",
    "signature",
  ];
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
      workPermitData.expiry_date = Date;
    } else {
      workPermitData.expiry_date = "";
    }
  };

  const permitChangeHandler = (e) => {
    const { name, value } = e.target;
    setWorkPermitData({
      ...workPermitData,
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
  const handleFileChange = (e) => {
    const { name, value } = e.target;
    setAttachmentFile({
      ...attachmentFile,
      [name]: value,
    });
  };
  const handleDeclarationChange = (event) => {
    setDeclaration(event.target.value);
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
      other_business_number,
      commencement_date,
      renewal_date,
      business_nature,
      business_of_nature,
      business_address,
      contact_information,
      business_branches,
      change_name,
      telephone2,
    } = formData;
    const filledFields = [
      telephone2,
      registration_number,
      business_name,
      other_business_number,
      commencement_date,
      renewal_date,
      business_nature,
      business_of_nature,
      business_address,
      contact_information,
      business_branches,
      change_name,
    ].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 12) * 100);
  };

  const certificationPercentage = () => {
    const {
      certification_provided,
      field_or_profession,
      expiry_date,
      certifying_body,
      certification,
      certificate_number,
    } = certificationData;
    const filledFields = [
      certification_provided,
      field_or_profession,
      expiry_date,
      certifying_body,
      certification,
      certificate_number,
    ].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 6) * 100);
  };
  const workPermitPercentage = () => {
    const { permit_required, permit_number, expiry_date } = workPermitData;
    const filledFields = [permit_required, permit_number, expiry_date].filter(
      (field) => field !== ""
    ).length;
    return Math.ceil((filledFields / 3) * 100);
  };
  const applicantPercentage = () => {
    const {
      name_of_indivisual,
      former_christian_name,
      former_surname,
      place_of_residence,
      contact_info,
      other_bussiness_occupation,
      present_nationality,
      nationality_of_origin,
    } = perticularApplicant;
    const filledFields = [
      name_of_indivisual,
      former_christian_name,
      former_surname,
      place_of_residence,
      contact_info,
      other_bussiness_occupation,
      present_nationality,
      nationality_of_origin,
    ].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 8) * 100);
  };

  const attachmentFilePercentage = () => {
    const { file_upload } = attachmentFile;
    const filledFields = [file_upload].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 1) * 100);
  };

  const declarationPercentage = () => {
    const filledFields = [declaration].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 1) * 100);
  };

  const signaturePercentage = () => {
    const {
      signatory_details,
      checkbox_signature,
      file_upload,
      secret_phrase,
    } = signature;
    const filledFields = [
      signatory_details,
      checkbox_signature,
      file_upload,
      secret_phrase,
    ].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 4) * 100);
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
      <h4 className="mb-4">Business Name Registration Form</h4>
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
              eventKey="work-permit"
              onClick={() => setActiveTab("work-permit")}
              className={`${
                activeTab === "work-permit" ? "bg-primary text-white " : ""
              }`}
            >
              Work Permit
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
              Particulars of Applicant
              <ProgressBar
                now={applicantPercentage()}
                label={`${applicantPercentage()}%`}
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="attachments"
              onClick={() => setActiveTab("attachments")}
              className={`${
                activeTab === "attachments" ? "bg-primary text-white " : ""
              }`}
            >
              Attachments
              <ProgressBar
                now={attachmentFilePercentage()}
                label={`${attachmentFilePercentage()}%`}
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
              Declaration
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
              Signature
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

              <Tab.Pane eventKey="work-permit">
                <WorkPermitForm
                  workPermitData={workPermitData}
                  permitChangeHandler={permitChangeHandler}
                  expiryDateWorkPermit={expiryDateWorkPermit}
                  handleExpiryDateWorkPermitChange={
                    handleExpiryDateWorkPermitChange
                  }
                />
              </Tab.Pane>
              <Tab.Pane eventKey="particulars-of-applicant">
                <ApplicantDetailsForm
                  perticularApplicant={perticularApplicant}
                  applicantChangeHandler={applicantChangeHandler}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="attachments">
                <AttachmentForm
                  attachmentFile={attachmentFile}
                  handleFileChange={handleFileChange}
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

export default BN1Form;

