import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@material-ui/core";
import { LocalStorageKeys } from "../../../constants/local-storage-keys.constant";
import LocalStorage from "../../../observables/localStorage.observable";
import AuthContext from "../../../context/AuthProvider";
import "./styles.scss";

function UserLogged() {
  const [name, setName] = useState("Name");
  const [lastname, setLastname] = useState("Lastname");
  const [photo, setPhoto] = useState(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAuth(undefined);
  };

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

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <>
      <div className="user-profile">
        <span className="material-icons">notifications</span>
        <button type="button" className="user-profile" onClick={handleClick}>
          {photo ? (
            <img className="user-profile__image" src={photo} alt="" />
          ) : (
            <div className="profile-img">
              <div className="initials">{name[0] + lastname[0]}</div>
            </div>
          )}
          <h5>{`${name || "Name"} ${lastname || "Lastname"}`}</h5>
        </button>
      </div>

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: "8rem",
            width: "10rem",
            background: "#FFEF0A",
          },
        }}
      >
        <MenuItem key="profile-cta" selected onClick={goToProfile}>
          Perfíl
        </MenuItem>
        <MenuItem key="logout-cta" onClick={handleLogout}>
          Cerrar Sesión
        </MenuItem>
      </Menu>
    </>
  );
}

export default UserLogged;
