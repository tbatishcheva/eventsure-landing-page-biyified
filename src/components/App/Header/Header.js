import React, { Component } from 'react';
import styles from './Header.module.css';
import Container from '../Container/Container';
import Logo from './Logo/Logo';
import MainMenu from './MainMenu/MainMenu';
import LoginMenu from './LoginMenu/LoginMenu';
import Link from '../Link/Link';

class Header extends Component {

  render() {
    return (
      <div className={styles.headerWrapper}>
        <Container>
          <div className={styles.header}>
            <div className={styles.topHeader}>
              <Logo />
              <div className={styles.menuWrapper}>
                <MainMenu />
                <div className={styles.loginMenuWrapper}>
                  <LoginMenu />
                </div>
              </div>
            </div>
            <div className={styles.headerContent}>
              <div className={styles.title}>Start selling tickets to your event on your website in 5 mins</div>
              <div className={styles.subTitle}>Redeem procceds from your sales directly into your bank account instantly</div>
              <div className={styles.linkWrapper}>
                <Link title="Get Started" bgColor="#F60000" color="#FFFFFF" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Header;
