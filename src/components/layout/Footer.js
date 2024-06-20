import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { faFacebook, faSlideshare, faSoundcloud, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    // <footer style={{ height: "100px" }} className="bg-secondary mt-4 py-3 d-flex justify-content-center align-items-center">
    //   <Container>
    //     <Row>
    //       <Col md={6}>
    //         <p className="text-center">&copy; 2024 Companies Office of Jamaica. All Rights Reserved.</p>
    //       </Col>
    //       <Col md={6} className="text-right">
    //         <p>Follow us on social media</p>
    //         {/* Add social media icons/links here */}
    //       </Col>
    //     </Row>
    //   </Container>
    // </footer>

    <footer style={{ height: "auto" }} className="bg-white mt-4 py-3 d-flex justify-content-center align-items-center ftClass">
  <Container>
    <Row>
      <Col md={6}>
        
        <p className="text-left">An Executive Agency since April 1, 1999</p>
        <p className="text-left">&copy; {new Date().getFullYear()} Companies Office of Jamaica. All Rights Reserved.</p>
        <p className="text-left">An Agency of the Ministry of Industry, Investment and Commerce</p>
      </Col>
      <Col md={6} className="text-right">
        <div className="row" style={{ fontSize: "45px" }}>
          <div className="col">
            <a href="https://www.facebook.com/pages/Companies-Office-of-Jamaica/1442259372734502?fref=ts" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
              
            </a>
          </div>
          <div className="col">
            <a href="https://twitter.com/orcjamaica" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
              
            </a>
          </div>
          <div className="col">
            <a href="https://soundcloud.com/orcjamaica" target="_blank">
            <FontAwesomeIcon icon={faSoundcloud} />
            </a>
          </div>
          <div className="col">
            <a href="http://slideshare.com/orcjamaica" target="_blank">
              <FontAwesomeIcon icon={faSlideshare} />
            </a>
          </div>
          <div className="col">
            <a href="https://www.youtube.com/channel/UCTs74JRW5Cq0pCTC38cYepw" target="_blank">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
        <a href="http://www.miic.gov.jm/" target="_blank">
          <img src={require("../../assets/images/icon_1.png")} alt="MIIC coatOfArms" style={{ height: '50px' }} />
        </a>
      </Col>
      <Col>
        <a href="http://www.fsl.org.jm/" target="_blank">
          <img src={require("../../assets/images/icon_2.png")} alt="eGovJa Logo" />
        </a>
      </Col>
      <Col>
        <a href="http://www.heart-nta.org/" target="_blank">
          <img src={require("../../assets/images/icon_3.png")} alt="HEART Logo" />
        </a>
      </Col>
      <Col>
        <a href="http://www.nht.gov.jm/" target="_blank">
          <img src={require("../../assets/images/icon_4.png")} alt="NHT Logo" />
        </a>
      </Col>
      <Col>
        <a href="http://www.mlss.gov.jm/pub/index.php?artid=20" target="_blank">
          <img src={require("../../assets/images/icon_5.png")} alt="NIS Logo" />
        </a>
      </Col>
      <Col>
        <a href="https://www.jamaicatax.gov.jm/" target="_blank">
          <img src={require("../../assets/images/icon_6.png")} alt="TAJ Logo" />
        </a>
      </Col>
      <Col>
        <a href="https://www.nsippregistry.gov.jm/" target="_blank">
          <img src={require("../../assets/images/icon_7.jpg")} alt="Nsipp Logo" />
        </a>
      </Col>
      <Col>
        <img src={require("../../assets/images/icon_8.png")} alt="Accepted Credit Cards" />
      </Col>
    </Row>
  </Container>
</footer>

  );
};

export default Footer;
