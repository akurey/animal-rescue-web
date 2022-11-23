import React, { useState, useEffect } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, TextBox } from "../../atoms";
import Logo from "../../../assets/images/logo.png";
import { LocalStorageKeys } from "../../../constants/local-storage-keys.constant";
import LocalStorage from "../../../observables/localStorage.observable";
import { UserObservable } from "../../../observables/user.observable";
import { useObservable } from "../../../hooks/use-observable.hook";
import useAuth from "../../../hooks/auth/useAuth";
import "./login.scss";
import {
  COMMON,
  COMMON_LOGO_ALT,
  LOGIN_PAGE,
  LOGIN_MAIL_DESCRIPTION,
  LOGIN_MAIL_NOT_VALID,
  LOGIN_MAIL_REQUIRED,
  LOGIN_PASSWORD_REQUIRED,
  LOGIN_PASSWORD_DESCRIPTION,
  LOGIN_PASSWORD_PLACEHOLDER,
  LOGIN_REMEMBER_ME,
  LOGIN_LOG_IN,
  LOGIN_FORGOT_PASSWORD,
} from "../../../constants/translations";

function Login() {
  const { t } = useTranslation([COMMON, LOGIN_PAGE]);
  const [user] = useObservable(UserObservable.user$);
  const [data, setData] = useState({
    login: {
      user: {
        username: "",
        mail: "",
        avatar: null,
        password: "",
      },
    },
  });
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const onRedirect = () => {
    setTimeout(() => {
      navigate("/rescues");
    }, 500);
  };

  useEffect(() => {
    if (data?.login) {
      LocalStorage?.setItem(
        LocalStorageKeys.AUTH_INFO,
        JSON.stringify(data.login)
      );
    }
    UserObservable.setUser(data?.login);
  }, [data]);

  const onLogin = () => {
    setData({
      login: {
        user: {
          password,
          mail,
          username: "User Test",
          avatar: null,
        },
      },
    });
    setAuth(data);
    if (user) {
      onRedirect();
    }
  };

  return (
    <div className="login">
      <img className="logo" alt={t(COMMON_LOGO_ALT)} src={Logo} />
      <div className="login--column">
        <TextBox
          description={t(LOGIN_MAIL_DESCRIPTION)}
          placeholder="usuario@correo.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          textBoxStyle="input--secondary"
          className="login--input"
          validators={[
            {
              validator: (val: string) => !validator.isEmpty(val),
              message: t(LOGIN_MAIL_REQUIRED),
            },
            {
              validator: (value: string) => validator.isEmail(value),
              message: t(LOGIN_MAIL_NOT_VALID),
            },
          ]}
        />
        <TextBox
          description={t(LOGIN_PASSWORD_DESCRIPTION)}
          placeholder={t(LOGIN_PASSWORD_PLACEHOLDER)}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          textBoxStyle="input--secondary"
          className="login--input"
          validators={[
            {
              validator: (val: string) => !validator.isEmpty(val),
              message: t(LOGIN_PASSWORD_REQUIRED),
            },
          ]}
        />
      </div>
      <label id="remember" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" />
        {t(LOGIN_REMEMBER_ME)}
      </label>
      <Button
        className="login--button"
        buttonStyle="btn--primary"
        onClick={onLogin}
      >
        {t(LOGIN_LOG_IN)}
      </Button>
      <Button
        onClick={onRedirect}
        buttonStyle="btn--link"
        className="login--link"
      >
        {t(LOGIN_FORGOT_PASSWORD)}
      </Button>
    </div>
  );
}

export default Login;
