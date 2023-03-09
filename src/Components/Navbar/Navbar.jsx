import React, { useState } from "react";
import { Link } from "react-router-dom";
import CircumIcon from "@klarr-agency/circum-icons-react";
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Auth/authAction";

export default function Navbar() {
  const { authToken } = useSelector((store) => store.authLogin);
  const [ac, setAc] = useState({ small: false, click: false });
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const handleClick = (e) => {
    e.preventDefault();
    setAc({ ...ac, click: !ac.click });
  };
  console.log(ac);
  return (
    <div className={styles.Navbar}>
      <Link to="/">
        <img className={styles.logo} src="/ChartDairy2.png" alt="logo"  />
      </Link>
      <ul className={styles.large}>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li onClick={handleClick}>
          <CircumIcon name="user" />
          <div className={ac.click ? styles.account : styles.ac}>
            {authToken ? (
              <p onClick={handleLogout}>Logout</p>
            ) : (
              <Link to="/login">Login</Link>
            )}
            {authToken ? "" : <Link to="/signup">Signup</Link>}
            <Link to="/admin">Admin</Link>
          </div>
        </li>
      </ul>
      <ul className={styles.small}>
       
        <li onClick={handleClick}>
          <CircumIcon name="user" />
          <div className={ac.click ? styles.account : styles.ac}>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/admin">Admin</Link>
          </div>
        </li>
        <li>
          <CircumIcon name="settings" />
        </li>
      </ul>
    </div>
  );
}
