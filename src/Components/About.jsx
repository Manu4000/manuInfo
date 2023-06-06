import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about from "./img/about_Manu.png";
import "./Styles.css";

export function About() {
  return (
    <main className="background d-flex overflow-hidden" id="about">
      <Container>
        <Row className="img-fluid">
          <Col
            lg={8}
            md={12}
            sm={12}
            className="secciones my-5 d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up-right"
          >
            <h2 className="text-light text-center mx-3 mx-sm-5 my-4">
              <b>Acerca de mí</b>
            </h2>
            <div className="text-center align-items-center mx-3 mx-sm-5 my-4">
              <p className="text-light">
                Un apasionado programador Full Stack. Comencé mi viaje en el
                mundo del desarrollo web en octubre de 2022 y actualmente estoy
                en el ultimo mes de cursado, desde entonces he adquirido una
                sólida formación en diferentes tecnologías y herramientas.
              </p>
              <p className="text-light">
                Mi enfoque principal se centra en crear aplicaciones web
                eficientes y funcionales, tanto en el frontend como en el
                backend. Con habilidades en lenguajes de programación como
                JavaScript, HTML, CSS, y experiencia en frameworks como React y
                Node.js.
              </p>
              <p className="text-light">
                Estoy preparado para enfrentar desafíos y desarrollar soluciones
                creativas. Me destaco por mi capacidad para trabajar en equipo,
                comunicarme efectivamente y aprender de manera continua. Estoy
                emocionado de seguir creciendo como desarrollador y contribuir a
                proyectos innovadores en el mundo de la tecnología.
              </p>
            </div>
          </Col>
          <Col
            lg={4}
            md={12}
            sm={12}
            className="secciones d-flex justify-content-center align-items-center"
          >
            <div className="img-container">
              <img
                src={about}
                alt=""
                data-aos="fade-up-left"
                className="img-fluid responsive-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
