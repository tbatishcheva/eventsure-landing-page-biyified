import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.css';

class Container extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={styles.container}/>
    );
  }
}

export default Container;
