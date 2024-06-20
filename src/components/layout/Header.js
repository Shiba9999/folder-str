import React from "react";
import { Navbar, Nav } from "react-bootstrap";


import { faHome, faFileAlt, faInfoCircle, faBuilding, faUser, faSignOutAlt  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <>
    
      <Navbar bg="light" expand="lg" className="nav-stick">
        
          <Navbar.Brand href="https://localhost:49554/dist/dashboard">
            <img
              style={{ display: "inline" }}
              src={require("../../assets/images/logo_sml.ico")}
              alt="Company Logo"
            />
            Filing Portal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="mr-auto">
              <Nav.Link href="https://localhost:49554/dist/dashboard">
              <FontAwesomeIcon icon={faHome} />
                Dashboard
              </Nav.Link>
              <Nav.Link href="https://localhost:49881/">
              <FontAwesomeIcon icon={faFileAlt} /> Document Library
              </Nav.Link>
              <Nav.Link style={{ cursor: "pointer" }} href="#">
              <FontAwesomeIcon icon={faOpencart} /> Cart
              </Nav.Link>
              <Nav.Link href="https://localhost:49554/dist/receipt2">
              <FontAwesomeIcon icon={faFileAlt} /> Receipts
              </Nav.Link>
              <Nav.Link href="https://localhost:49554/dist/information">
              <FontAwesomeIcon icon={faInfoCircle} /> Information
              </Nav.Link>
              <Nav.Link href="https://localhost:51954/ContactUs.aspx">
              <FontAwesomeIcon icon={faBuilding} /> Contact Us
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                className="nav-link dropdown-toggle pb-0"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="navProfileInfo">
                  <FontAwesomeIcon icon={faUser} className="px-1" />
                  <div className="profile">
                    <span className="ng-binding"> Arnab Dey</span>
                    <span
                      className="email ng-binding"
                      title="You are currently logged in as dey1992arnab@gmail.com"
                    >
                      dey1992arnab@gmail.com
                    </span>
                  </div>
                </div>
              </Nav.Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="dropdown-item">
                  <form
                    action="https://localhost:49554/Session/Logout"
                    className="form-inline ng-pristine ng-valid"
                    method="post"
                  >
                    <button type="submit" className="btn btn-danger">
                    <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                    </button>
                  </form>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>
     
        <div className="row">
          <div className="col-xs-12 col-8">
            <a href="/fp/dist/dashboard">
              <img
                src={require("../../assets/images/logo.png")}
                alt="COJ"
                style={{ width: "500px", maxWidth: "100%" }}
              />
            </a>
          </div>
          <div className="col-xs-12 col-4">
            <div className="float-right">
              Government of Jamaica{" "}
              <img
                src={require("../../assets/images/flag_jamaica.gif")}
                alt="flag jamaica"
                style={{ maxWidth: "100%" }}
              />
              <br />
              <img
                src={require("../../assets/images/icon_browsers.png")}
                alt="icon browsers"
                style={{ width: "160px", maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      
      
    </>
  );
};

export default Header;
