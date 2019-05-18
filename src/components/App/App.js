import React from 'react';
import styles from './App.module.css';
import Header from './Header/Header';
import HowItWorks from './HowItWorks/HowItWorks';
import Testimonials from './Testimonials/Testimonials';
import RegisterNow from './RegisterNow/RegisterNow';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <HowItWorks />
      <Testimonials />
      <RegisterNow />
      <Footer />
    </div>
  );
}

export default App;
