import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './LoginMenu.module.css';

class LoginMenu extends Component {
  static propTypes = {};

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
