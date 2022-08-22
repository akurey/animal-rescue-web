import React from "react";
import "./styles.scss";

interface UserLoggedProps {
  name: string;
  lastname: string;
  photo?: string;
}

function UserLogged({ name, lastname, photo }: UserLoggedProps) {
  const goToProfile = () => {};

  return (
    <button type="button" className="user-profile" onClick={goToProfile}>
      <div>
        <h1>Mi perfil</h1>
        <h2>{`${name} ${lastname}`}</h2>
      </div>
      {photo ? (
        <img src={photo} alt="" />
      ) : (
        <div className="profile-img">
          <div className="initials">{name[0] + lastname[0]}</div>
        </div>
      )}
    </button>
  );
}

export default UserLogged;
