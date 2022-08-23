import React from "react";
import UserLogged from "../../atoms/UserLogged";
import "./styles.scss";

function Header() {
  const userInfo = {
    name: "John",
    lastname: "Smith",
    photo: "",
  };

  return (
    <div className="header">
      <h1>Nuevo animal rescatado</h1>
      <UserLogged
        name={userInfo.name}
        lastname={userInfo.lastname}
        photo={userInfo.photo}
      />
    </div>
  );
}

export default Header;
