import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Link.module.css';

class Link extends Component {
  static propTypes = {
    title: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    bgColor: '#010101',
    color: '#FFFFFF',
  }

  render() {
    const propStyles = {
      color: this.props.color,
      backgroundColor: this.props.bgColor,
    };
    return (
      <div
        className={styles.link}
        style={propStyles}
      >
        <a
          className={styles.alink}
          href="https:google.com"
          style={propStyles}
        >
          {this.props.title}
        </a>
      </div>

    );
  }
}

export default Link;
