import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MainMenu.module.css';

class MainMenu extends Component {
  static propTypes = {};

  render() {
    return (
      <ul className={styles.mainMenu}>
        <li><a href="https://google.com">How it Works</a></li>
        <li><a href="https://google.com">Pricing</a></li>
        <li><a href="https://google.com">Testimonials</a></li>
      </ul>
    );
  }
}

export default MainMenu;
