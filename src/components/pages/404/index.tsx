import React from "react";
import { Link } from "react-router-dom";
import "./404.scss";
import Error404Image from "../../../assets/images/404.png";

function NotFound() {
  return (
    <div className="e404--container">
      {/* TODO: Saque la imagen de Freepik - se debe de cambiar por la adecuada segun el team de diseño
      <a href="https://www.freepik.es/vector-gratis/perezoso-estando-muy-triste_9075789.htm#query=sad%20animal&position=28&from_view=search&track=sph">Imagen de user10320847</a> en Freepik */}
      <img
        className="e404--container__image"
        alt="Refugio Animal de Costa Rica Logo"
        src={Error404Image}
      />
      <h1>Error 404</h1>
      <div className="e404--container__CTA">
        <span>La página que buscas no existe, prueba</span>
        <Link className="e404--container__CTA-link" to="/rescues">
          Ir a la página de Inicio
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
