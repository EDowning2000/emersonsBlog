import React from "react";
import styles from './Nav.module.css'

const Nav = () => {
  return (
   <div className={styles.container}>
     <h5>My Logo</h5>
     <h5>About Me</h5>
     <h5>Contact</h5>
     <h5>My Work</h5>
   </div>
  );
};
export default Nav;
