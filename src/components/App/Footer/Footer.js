import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

class Footer extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={styles.container}/>
    );
  }
}

export default Footer;
