import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './RegisterNow.module.css';
import Container from '../Container/Container';

class RegisterNow extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={styles.registerNowWrapper}>
        <Container>
          <div className={styles.registerNow}>
            <div className={styles.title}>Register Now</div>
            <form className={styles.form}>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email" />
              <input type="submit" />
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default RegisterNow;
