import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Testimonials.module.css';
import Container from '../Container/Container';
import TestimonialCard from './TestimonialCard/TestimonialCard';
import akinboyeRichard from './akinboye-richard.png';
import cliveOjeh from './clive-ojeh.png';
import josephineJohnston from './josephine-johnston.png';
import effieOwen from './effie-owen.png';

class Testimonials extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={styles.testimonialsWrapper}>
        <Container>
          <div className={styles.title}>Testimonials</div>
          <div className={styles.testimonialsGrid}>
            <TestimonialCard
              img={akinboyeRichard}
              comment="Llaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta"
              name="Akinboye Richard"
              position="Nja Entertatinment"
            />
            <TestimonialCard
              img={cliveOjeh}
              comment="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi"
              name="Clive Ojeh"
              position="Apple Inc."
            />
            <TestimonialCard
              img={josephineJohnston}
              comment="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores "
              name="Josephine Johnston"
              position="Sony Entertatainment"
            />
            <TestimonialCard
              img={effieOwen}
              comment="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              name="Effie Owen"
              position="Ernest Tech"
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default Testimonials;
