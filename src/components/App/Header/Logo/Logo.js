import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.css';
import logo from './logo.svg';

class Logo extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
    );
  }
}

export default Logo;
