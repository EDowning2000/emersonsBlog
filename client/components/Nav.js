import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.container}>
      <h6 className={styles.logo}>My Logo</h6>
      <div className={styles.links}>
        <h6 className={styles.single}>About Me</h6>
        <h6 className={styles.single}>Contact</h6>
        <h6 className={styles.single}>My Work</h6>
      </div>
    </div>
  );
};
export default Nav;
