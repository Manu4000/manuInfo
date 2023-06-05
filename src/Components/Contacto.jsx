import React, { useState } from "react";

export function Contacto() {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMensajeEnviado(true);

    e.target.reset();
  };

  return (
    <section className="register-background background d-flex justify-content-center align-items-center p-5">
      {mensajeEnviado ? (
        <p className="text-center">
          Mensaje enviado, en un plazo máximo de 24hs me pondré en contacto
          contigo
        </p>
      ) : (
        <form
          className="formin"
          action="https://formsubmit.co/ff4fd77f6f3f08c1379a8b75b8e24800"
          method="POST"
          onSubmit={handleSubmit}
        >
          <h5 className="text-center">Formulario de Contacto</h5>
          <label className="colore text-center" htmlFor="nombres">
            Ingrese su Nombre y Apellido
            <input
              className="controls"
              type="text"
              name="nombres"
              id="nombres"
              placeholder="Juan Pedro"
              required
            />
          </label>
          <label className="colore text-center" htmlFor="Apellidos">
            Ingrese el Asunto
            <input
              className="controls"
              type="text"
              name="Apellidos"
              id="Apellidos"
              placeholder="Planeamento"
              required
            />
          </label>
          <label className="colore text-center" htmlFor="email">
            Ingrese su Mail
            <input
              className="controls"
              type="email"
              name="email"
              id="email"
              placeholder="juanpedroperez@gmail.com"
              required
            />
          </label>
          <label className="colore text-center" htmlFor="text">
            Ingrese su consulta
            <input
              className="controls"
              type="text"
              name="consulta"
              id="Consulta"
              required
            />
          </label>
          <input className="botons" type="submit" value="Enviar" />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      )}
    </section>
  );
}
