import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FooterMenuItem.module.css';

class FooterMenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    mainItem: PropTypes.bool,
  };

  static defaultProps = {
    children: '',
    mainItem: false,
  }

  render() {
    const mainStyle = {};
    if (this.props.mainItem) {
      Object.assign(mainStyle, {
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '21px',
      });
    }

    return (
      <div
        style={mainStyle}
        className={styles.footerMenuItem}
      >
        {this.props.children}
      </div>
    );
  }
}

export default FooterMenuItem;
