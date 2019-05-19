import React, { Component } from 'react';
import styles from './Logo.module.css';
import logo from './logo.svg';

class Logo extends Component {

  render() {
    return (
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
    );
  }
}

export default Logo;
