import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm.js";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/logo-github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer pb-3 pt-4" id="footer" >
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}
          <Col className="text-sm-center">
            <div className="social-icon">
              <a href="https://id.linkedin.com/in/najmilhayah"><img src={navIcon1} alt="linkedin" /></a>
              <a href="https://github.com/najmil"><img src={navIcon2} alt="github" /></a>
              <a href="https://www.instagram.com/najmilhayh/"><img src={navIcon3} alt="instagram" /></a>
            </div>
            <p className="text-center">this page is build with React JS</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}