import React, { useEffect, useState } from "react";
import { LocalStorageKeys } from "../../../constants/local-storage-keys.constant";
import LocalStorage from "../../../observables/localStorage.observable";
import "./styles.scss";

function UserLogged() {
  const [name, setName] = useState("Name");
  const [lastname, setLastname] = useState("Lastname");
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(
      LocalStorage.getItem(LocalStorageKeys.AUTH_INFO)
    ).user.user;
    if (userData) {
      const username = userData.username.split(" ");
      setName(username[0]);
      setLastname(username[1]);
      setPhoto(userData.avatar);
    }
  });

  const goToProfile = () => {};

  return (
    <button type="button" className="user-profile" onClick={goToProfile}>
      <span className="material-icons">notifications</span>
      {photo ? (
        <img src={photo} alt="" />
      ) : (
        <div className="profile-img">
          <div className="initials">{name[0] + lastname[0]}</div>
        </div>
      )}
      <h5>{`${name || "Name"} ${lastname || "Lastname"}`}</h5>
    </button>
  );
}

export default UserLogged;
