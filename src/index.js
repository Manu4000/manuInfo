import React from "react";
import ReactDOM from "react-dom/client";
import "./Components/Styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from "./Components/navBar"
import Fondo from "./Components/fondoPrincipal"
import { About } from "./Components/About"
import Conocimiento from "./Components/Conocimiento";
import Logos from "./Components/logos";
import { Footer } from "./Components/footer";
import { Contacto } from "./Components/Contacto";
import { Misproyectos } from "./Components/Misproyectos";

const root = ReactDOM.createRoot(document.getElementById("root"));




root.render(
    <>
        <Navegacion />
        <Fondo />
        <About />
        <Conocimiento />
        <Logos />
        <Misproyectos/>
        <Contacto/>
        <Footer/>
    </>
);
