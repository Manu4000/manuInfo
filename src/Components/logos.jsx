import "./Styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import js from "./img/html-css-js.png";
import react from "./img/react.svg";
import node from "./img/nodejs.png";
import git from "./img/git.png";
import gitHub from "./img/github-mark-white.svg";
import mongo from "./img/mongoLogo.png";

function Logos() {
  return (
    <main className="background">
      <Container>
        <Row>
          <h2 className="text-light align-items-center d-flex justify-content-center presentacion">
            <b> Tecnologías</b>
          </h2>
          <Col className="d-flex flex-wrap justify-content-center align-items-center col-lg-12 col-md-12 col-sm-12 my-5" data-aos="zoom-in-up">
            <img src={react} alt="" className="logo-img " />
            <img src={gitHub} alt="" className="logo-img " />
            <img src={js} alt="" className="logo-img" />
            <img src={node} alt="" className="logo-img " />
            <img src={git} alt="" className="logo-img " />
            <img src={mongo} alt="" className="logo-img " />

          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Logos;
