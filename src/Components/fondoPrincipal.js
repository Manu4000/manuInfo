import "./Styles.css";
import manu from "./img/LogoManu.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";


function Fondo() {
    return (
        <header className="background d-flex">
            <Container>
                <Row>
                    <Col className="col-lg-4 col-md-12 col-sm-12" >
                        <img src={manu} className="manu" alt="Imagen de Manuel Torres" data-aos="fade-up-right" /></Col>

                    <Col className="col-lg-7 col-md-12 col-sm-12">
                        <div>
                            <strong>
                                <p className="text-light presentacion text-center" data-aos="fade-up-left" > ¡Hola!  soy Manuel Torres Desarrollador Full Stack, Bienvenido
                                </p>
                            </strong>
                        </div></Col>
                </Row>
            </Container>
        </header>
    );
}



export default Fondo