import React, { useState } from "react";
import Button from "../../atoms/button";
// import DoggieIcon from "../../../assets/icons/doggie.svg";
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
        {/* <img className="login--picture"></img> */}
      </div>
      <div className="login--inputs">
        <p className="login--title">Refugio de animales Costa Rica</p>
        <p className="login--input">Correo electrónico</p>
        <input
          className="login--input"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="usuario@email.com"
        />
        <p className="login--input">Contraseña</p>
        <input
          type="password"
          className="login--input"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="**********"
        />
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
