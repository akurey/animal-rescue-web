import React, { useState, useEffect } from "react";
import jwt_encode from "jwt-encode";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, TextBox, PasswordTextBox } from "../../atoms";
import Logo from "../../../assets/images/logo.png";
import { LocalStorageKeys } from "../../../constants/local-storage-keys.constant";
import LocalStorage from "../../../observables/localStorage.observable";
import { UserObservable } from "../../../observables/user.observable";
import { useObservable } from "../../../hooks/use-observable.hook";
import useAuth from "../../../hooks/auth/useAuth";
import UserService from "../../../services/user.services";
import "./login.scss";
import {
  COMMON,
  COMMON_LOGO_ALT,
  LOGIN_PAGE,
  LOGIN_MAIL_DESCRIPTION,
  LOGIN_MAIL_REQUIRED,
  LOGIN_PASSWORD_REQUIRED,
  LOGIN_PASSWORD_DESCRIPTION,
  LOGIN_PASSWORD_PLACEHOLDER,
  LOGIN_REMEMBER_ME,
  LOGIN_LOG_IN,
  LOGIN_FORGOT_PASSWORD,
  LOGIN_FAIL,
} from "../../../constants/translations";

function Login() {
  const secret = process.env.REACT_APP_JWT_SECRET;
  const { t } = useTranslation([COMMON, LOGIN_PAGE]);
  const [user] = useObservable(UserObservable.user$);
  const [data, setData] = useState({
    login: {
      user: {
        name: "",
        username: "",
        mail: "",
        avatar: null,
        password: "",
        accessToken: "",
      },
    },
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
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

  useEffect(() => {
    setLoginError("");
  }, [username, password]);

  const onLogin = async () => {
    try {
      const hashPassword = jwt_encode(password, secret);
      const response = await UserService.loginUser(username, hashPassword);
      setData({
        login: {
          user: {
            name: response.data.data.name,
            password: hashPassword,
            mail: response.data.email,
            username,
            avatar: null,
            accessToken: response.data.data.token,
          },
        },
      });
      setAuth(data);
      if (user) {
        onRedirect();
      }
    } catch (err) {
      if (err.response?.status === 404 || err.response?.status === 401) {
        setLoginError(t(LOGIN_FAIL));
      }
    }
  };

  return (
    <div className="login">
      <img className="logo" alt={t(COMMON_LOGO_ALT)} src={Logo} />
      <div className="login--column">
        <TextBox
          description={t(LOGIN_MAIL_DESCRIPTION)}
          placeholder="usuario123"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          textBoxStyle="input--secondary"
          className="login--input"
          validators={[
            {
              validator: (val: string) => !validator.isEmpty(val),
              message: t(LOGIN_MAIL_REQUIRED),
            },
          ]}
        />
        <PasswordTextBox
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
          loginError={loginError}
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
