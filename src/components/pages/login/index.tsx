import React, { useState } from "react";
import validator from "validator";
import Button from "../../atoms/button";
import TextBox from "../../atoms/text-box";
import DoggieIcon from "../../../assets/images/Doggie.png";
import "./login.scss";

function Login() {
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    // TODO
    console.log(mail, password);
  };

  const onRedirect = () => {
    // TODO
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
          classname="login--link"
          onClick={onRedirect}
          buttonStyle="btn--link"
        >
          Olvidé mi contraseña
        </Button>
        <Button
          classname="login--button"
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
