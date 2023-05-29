import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import about from "./img/about_Manu.png";

export function About() {
  return (
    <main className="background d-flex" id="about">
      <Container>
        <Row className="img-fluid">
          <Col
            lg={7}
            md={12}
            sm={12}
            className="secciones my-5"
            data-aos="fade-up-right"
          >
            <h2 className="text-light text-center mx-5 my-5"><b>Acerca de mí</b></h2>
            <div>
              <p className="text-light text-center mx-5 my-5">
                Un apasionado programador Full Stack. Comencé mi viaje en el mundo
                del desarrollo web en octubre de 2022 y desde entonces he
                adquirido una sólida formación en diferentes tecnologías y
                herramientas.
              </p>
              <p className="text-light text-center mx-5 my-5">
                Mi enfoque principal se centra en crear aplicaciones web
                eficientes y funcionales, tanto en el frontend como en el backend.
                Con habilidades en lenguajes de programación como JavaScript,
                HTML, CSS, y experiencia en frameworks como React y Node.js.
              </p>
              <p className="text-light text-center mx-5 my-5">
                Estoy preparado para enfrentar desafíos y desarrollar soluciones
                creativas. Me destaco por mi capacidad para trabajar en equipo,
                comunicarme efectivamente y aprender de manera continua. Estoy
                emocionado de seguir creciendo como desarrollador y contribuir a
                proyectos innovadores en el mundo de la tecnología.
              </p>
            </div>
          </Col>
  
        </Row>
      </Container>
    </main>
  );
}
