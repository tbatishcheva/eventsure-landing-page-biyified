import React, { Component } from 'react';
import styles from './MainMenu.module.css';

class MainMenu extends Component {

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
