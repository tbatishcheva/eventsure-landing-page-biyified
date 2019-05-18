import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FooterMenu.module.css';

class FooterMenu extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  }

  render() {
    return (
      <div className={styles.footerMenu}>
        {this.props.children}
      </div>
    );
  }
}

export default FooterMenu;
