import React, { Component } from 'react';
import styles from './LoginMenu.module.css';

class LoginMenu extends Component {

  render() {
    return (
      <ul className={styles.loginMenu}>
        <li><a href="https:google.com">Login</a></li>
        <li><a href="https:google.com">Sign Up</a></li>
      </ul>
    );
  }
}

export default LoginMenu;
