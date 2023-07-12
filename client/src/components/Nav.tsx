import React from "react";
import styles from "../styles/Nav.module.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className={styles.navContainer}>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>Introduction</span>
      <span>Category</span>
      <span>Donation</span>
      <Link to="/login">
        <span className={styles.login}>Login</span>
      </Link>
      <Link to="/signup">
        <span>Signup</span>
      </Link>
    </div>
  );
}

export default Navigation;
