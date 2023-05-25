import react from "react";
import ReactDOM from "react-dom/client";
import "./Components/Styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from "./Components/navBar"
import Fondo from "./Components/fondoPrincipal"
import {About} from "./Components/About"

const root = ReactDOM.createRoot(document.getElementById("root"));




root.render(
    <>
    <Navegacion/>
    <Fondo/>
    <About/>
    </>
);
