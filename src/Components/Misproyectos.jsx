import { Container, Row, Col, Carousel } from "react-bootstrap";
import { useState } from "react";
import jci from "./img/jcicasilda.png";
import portfolio from "./img/porfoliomanu.png";

export function Misproyectos() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <main className="background">
      <Container>
        <Row>
          <Col
            lg={7}
            md={12}
            sm={12}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <a href="https://jcicasilda.netlify.app/index/">
                <img className="d-block w-100" src={jci} alt="First slide" />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={portfolio}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col
            lg={5}
            md={12}
            sm={12}
            className="my-5"
          >
            <div>
              <h1 className="text-center text-light">Mis Proyectos</h1>
            </div>
            <div className="text-center text-light my-5"><p>En este espacio encontrarás una recopilación de los proyectos que he creado a lo largo de mi trayectoria profesional. Cada proyecto es el resultado de mi pasión por el desarrollo y la innovación.</p>
            <p>Te invito a navegar por los proyectos y descubrir la diversidad de habilidades y tecnologías que he utilizado en su desarrollo. Cada proyecto tiene su propia historia y muestra mi capacidad para adaptarme a diferentes desafíos y entornos de trabajo.</p></div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
