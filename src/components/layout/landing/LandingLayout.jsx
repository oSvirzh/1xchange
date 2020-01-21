import React from 'react';
import styled from 'styled-components';
import Header from './header/Header';
import Intro from './intro/Intro';
import Trade from './trade/Trade';
import Advantages from './advantages/Advantages';
import Offers from './offers/Offers';
import Footer from './footer/Footer';
import Start from './start/Start';
import '../../../styles/styles.scss';

const LandingLayout = () => {
  return (
      <Styled.LandingLayout>
        <Header/>
        <Intro/>
        <Trade/>
        <Advantages/>
        <Offers/>
        <Start/>
        <Footer/>
      </Styled.LandingLayout>
  );
};

const Styled = {
  LandingLayout: styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      325.95deg,
      #101728 -143.03%,
      #11192b -3.81%,
      #15213d 58.69%,
      #0c1834 131.65%
    );
  `,
};

export default LandingLayout;
