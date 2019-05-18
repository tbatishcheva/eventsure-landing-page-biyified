import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

class Header extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={styles.container}/>
    );
  }
}

export default Header;
