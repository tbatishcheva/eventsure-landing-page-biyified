import React, { Component } from 'react';
import styles from './Footer.module.css';
import Container from '../Container/Container';
import FooterMenu from './FooterMenu/FooterMenu';
import FooterMenuItem from './FooterMenu/FooterMenuItem/FooterMenuItem';
import logo from './logo.svg';

class Footer extends Component {

  render() {
    return (
      <div className={styles.footerWrapper}>
        <Container>
          <div className={styles.footer}>
            <FooterMenu>
              <FooterMenuItem mainItem><a href="https://google.com">About</a></FooterMenuItem>
              <FooterMenuItem mainItem={false}><a href="https://google.com">Support</a></FooterMenuItem>
              <FooterMenuItem><a href="https://google.com">Helpline</a></FooterMenuItem>
              <FooterMenuItem><a href="https://google.com">Pricing</a></FooterMenuItem>
              <FooterMenuItem><a href="https://google.com">Platform</a></FooterMenuItem>
            </FooterMenu>
            <FooterMenu>
              <FooterMenuItem mainItem><a href="https://google.com">Features</a></FooterMenuItem>
              <FooterMenuItem><a href="https://google.com">Multi User Admin</a></FooterMenuItem>
              <FooterMenuItem><a href="https://google.com">Social Integration</a></FooterMenuItem>
              <FooterMenuItem><a href="https://google.com">Instant Payment</a></FooterMenuItem>
              <FooterMenuItem><a href="https://google.com">Multipayment Option</a></FooterMenuItem>
            </FooterMenu>
            <FooterMenu>
              <FooterMenuItem mainItem><a href="https://google.com">About</a></FooterMenuItem>
              <FooterMenuItem><a href="https://google.com">Demo</a></FooterMenuItem>
              <FooterMenuItem><a href="https://google.com">How To</a></FooterMenuItem>
              <FooterMenuItem><a href="https://google.com">Documentation</a></FooterMenuItem>
              <FooterMenuItem><a href="https://google.com">Events</a></FooterMenuItem>
            </FooterMenu>
            <FooterMenu>
              <FooterMenuItem mainItem><a href="https://google.com">Company</a></FooterMenuItem>
              <FooterMenuItem><a href="https://google.com">About</a></FooterMenuItem>
              <FooterMenuItem><a href="https://google.com">Customer</a></FooterMenuItem>
              <FooterMenuItem><a href="https://google.com">Career</a></FooterMenuItem>
              <FooterMenuItem><a href="https://google.com">Contact Us</a></FooterMenuItem>
            </FooterMenu>
            <div>
              <img src={logo} alt="Logo" />
              <div className={styles.address}>1 CIPM Avenue, Alausa Ikeja</div>
              <div className={styles.address}>Lagos, Nigeria.</div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Footer;
