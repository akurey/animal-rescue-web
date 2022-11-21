import React from "react";
import "./home.scss";
import { useTranslation } from "react-i18next";
import Logo from "../../../assets/images/logo.png";
import { COMMON, COMMON_LOGO_ALT } from "../../../constants/translations";

function Home() {
  const { t } = useTranslation(COMMON);

  return (
    <div className="background">
      <div className="login">
        <img className="logo" alt={t(COMMON_LOGO_ALT)} src={Logo} />
      </div>
    </div>
  );
}

export default Home;
