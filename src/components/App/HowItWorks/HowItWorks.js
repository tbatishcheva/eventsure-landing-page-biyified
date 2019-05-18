import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './HowItWorks.module.css';
import HowItWorksCard from './HowItWorksCard/HowItWorksCard';
import event from './event.svg';
import website from './website.svg';
import tickets from './tickets.svg';
import Container from '../Container/Container';

class HowItWorks extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={styles.howItWorksWrapper}>
        <Container>
          <div className={styles.bgWrapper}>
          <div className={styles.title}>How It Works</div>
          <div className={styles.howItWorks}>
            <div className={styles.howItWorkWrapper}>
              <HowItWorksCard
                img={event}
                title="Register Your Event"
                subtitle="Llaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta"
              />
            </div>
            <div className={styles.howItWorkWrapper}>
              <HowItWorksCard
                img={website}
                title="Connect Your Website & Social Media"
                subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
              />
            </div>
            <div className={styles.howItWorkWrapper}>
              <HowItWorksCard
                img={tickets}
                title="Start Selling Your Tickets"
                subtitle="Aaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi"
              />
            </div>
          </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default HowItWorks;
