import React, { Component } from 'react';
import styles from './RegisterNow.module.css';
import Container from '../Container/Container';

class RegisterNow extends Component {

  render() {
    return (
      <div className={styles.registerNowWrapper}>
        <Container>
          <div className={styles.registerNow}>
            <div className={styles.title}>Register Now</div>
            <div className={styles.formWrapper}>
              <form className={styles.form}>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email" />
                <input type="submit" />
              </form>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default RegisterNow;
