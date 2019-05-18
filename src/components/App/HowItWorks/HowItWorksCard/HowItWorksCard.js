import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './HowItWorksCard.module.css';

class HowItWorksCard extends Component {
  static propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
  };

  static defaultProps = {
    img: '',
    title: '',
    subtitle: '',
  }

  render() {
    return (
      <div className={styles.howItWorksCard}>
        <div className={styles.imageWrapper}>
        <img className={styles.image} src={this.props.img} alt={this.props.img} />
        </div>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.subtitle}>{this.props.subtitle}</div>
      </div>
    );
  }
}

export default HowItWorksCard;
