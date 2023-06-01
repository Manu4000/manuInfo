import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import manu from "./img/LogoManu.png";
import "./Styles.css";

function Fondo() {
  return (
    <div className="overflow-hidden"> 
      <header className="background d-flex">
        <Container>
          <Row className="align-items-center">
            <Col lg={4} md={12} sm={12} className="text-center">
              <img src={manu} className="manu" alt="Imagen de Manuel Torres" data-aos="fade-up-right" />
            </Col>

            <Col lg={8} md={12} sm={12}>
              <div>
                <strong>
                  <p className="text-light presentacion text-center" data-aos="fade-up-left">¡Hola! Soy Manuel Torres, Desarrollador Full Stack. ¡Bienvenido!</p>
                </strong>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default Fondo;
