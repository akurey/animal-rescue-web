import React from "react";
import { Link } from "react-router-dom";
import "./404.scss";
import { useTranslation } from "react-i18next";
import Error404Image from "../../../assets/images/404.png";
import {
  COMMON,
  COMMON_LOGO_ALT,
  NOT_FOUND_DESCRIPTION_LINK,
  NOT_FOUND_DESCRIPTION_TEXT,
  NOT_FOUND_PAGE,
  NOT_FOUND_TITLE,
} from "../../../constants/translations";

function NotFound() {
  const { t } = useTranslation([NOT_FOUND_PAGE, COMMON]);

  return (
    <div className="e404--container">
      {/* TODO: Saque la imagen de Freepik - se debe de cambiar por la adecuada segun el team de diseño
      <a href="https://www.freepik.es/vector-gratis/perezoso-estando-muy-triste_9075789.htm#query=sad%20animal&position=28&from_view=search&track=sph">Imagen de user10320847</a> en Freepik */}
      <img
        className="e404--container__image"
        alt={t(COMMON_LOGO_ALT)}
        src={Error404Image}
      />
      <h1>{t(NOT_FOUND_TITLE)}</h1>
      <div className="e404--container__CTA">
        <span>{t(NOT_FOUND_DESCRIPTION_TEXT)}</span>
        <Link className="e404--container__CTA-link" to="/rescues">
          {t(NOT_FOUND_DESCRIPTION_LINK)}
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
