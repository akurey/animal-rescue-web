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
        <h4>Mi perfil</h4>
        <h5>{`${name} ${lastname}`}</h5>
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
