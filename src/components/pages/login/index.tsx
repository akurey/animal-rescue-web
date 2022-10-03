import React, { useState, useEffect } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import { Button, TextBox } from "../../atoms";
import DoggieIcon from "../../../assets/images/Doggie.png";
import { LocalStorageKeys } from "../../../constants/local-storage-keys.constant";
import LocalStorage from "../../../observables/localStorage.observable";
import { UserObservable } from "../../../observables/user.observable";
import { useObservable } from "../../../hooks/use-observable.hook";
import "./login.scss";

function Login() {
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
    if (user) {
      onRedirect();
    }
  };

  return (
    <div className="login">
      <div className="login--image">
        <img className="login--picture" alt="doggie" src={DoggieIcon} />
      </div>
      <div className="login--info">
        <p className="login--title">Refugio de animales Costa Rica</p>
        <div className="login--inputs">
          <TextBox
            description="Correo electrónico"
            placeholder="usuario@email.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            textBoxStyle="input--secondary"
            className="login--input"
            validators={[
              {
                validator: (val: string) => !validator.isEmpty(val),
                message: "El correo electrónico es requerido",
              },
              {
                validator: (value: string) => validator.isEmail(value),
                message: "Correo electrónico no valido",
              },
            ]}
          />
          <TextBox
            description="Contraseña"
            placeholder="**********"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            textBoxStyle="input--secondary"
            className="login--input"
            validators={[
              {
                validator: (val: string) => !validator.isEmpty(val),
                message: "La contraseña es requerida",
              },
            ]}
          />
        </div>
        <Button
          className="login--link"
          onClick={onRedirect}
          buttonStyle="btn--link"
        >
          Olvidé mi contraseña
        </Button>
        <Button
          className="login--button"
          buttonStyle="btn--secondary"
          onClick={onLogin}
        >
          Ingresar
        </Button>
      </div>
    </div>
  );
}

export default Login;
