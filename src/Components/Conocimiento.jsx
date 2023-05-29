import "./Styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

function Conocimiento() {
  return (
    <main className="background" id="conocimientos">
     
        <Row className="img-fluid d-flex justify-content-center">
          <Col
            className="col-lg-12 col-md-12 col-sm-12 secciones my-5"
            data-aos="fade-up-right"
          >
            <h2 className="text-light text-center mx-5 my-5">
              <b> Conocimiento </b>
            </h2>
            <div>
              <p className="text-light text-center mx-5 my-5">
                Tengo conocimientos acerca de estos lenguajes y tecnologías como
                desarrollador Full Stack. En el frontend, soy experto en HTML,
                CSS y JavaScript, y estoy familiarizado con frameworks como
                React para crear interfaces de usuario interactivas y
                atractivas. Además, tengo experiencia en el uso de librerías
                como Bootstrap para agilizar el desarrollo y mejorar la
                apariencia de las aplicaciones web.
              </p>
              <p className="text-light text-center mx-5 my-5">
                En el backend, domino lenguajes como JavaScript con Node.js para
                crear APIs robustas y escalables. Además, trabajo con bases de
                datos no relacionales como MongoDB. A su vez, tengo
                conocimientos en control de versiones con Git y GitHub.
              </p>
              <p className="text-light text-center mx-5 my-5">
                Mi objetivo es utilizar estos conocimientos para desarrollar
                aplicaciones web eficientes, seguras y de alto rendimiento,
                brindando una experiencia excepcional al usuario y cumpliendo
                con los estándares y mejores prácticas de la industria.
              </p>
            </div>
          </Col>
        </Row>
    </main>
  );
}

export default Conocimiento;
