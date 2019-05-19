import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TestimonialCard.module.css';

class TestimonialCard extends Component {
  static propTypes = {
    img: PropTypes.string,
    comment: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
  };

  static defaultProps = {
    img: '',
    comment: '',
    name: '',
    position: '',
  }

  render() {
    return (
      <div className={styles.testimonialCard}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={this.props.img} alt={this.props.img} />
        </div>
        <div className={styles.commentWrapper}>
          <div className={styles.comment}>{this.props.comment}</div>
          <div className={styles.name}>{this.props.name}</div>
          <div className={styles.position}>{this.props.position}</div>
        </div>
      </div>
    );
  }
}

export default TestimonialCard;
