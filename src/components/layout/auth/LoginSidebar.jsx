import React from 'react';
import logo from '../../../assets/images/logoLarge.svg';
import styled from 'styled-components';

const Styled = {
  Sidebar: styled.div`
    background: linear-gradient(
      325.95deg,
      #101728 -143.03%,
      #11192b -3.81%,
      #15213d 58.69%,
      #0c1834 131.65%
    );
    max-width: 500px;
    width: 100%;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

const LoginSidebar = () => (
  <Styled.Sidebar>
    <img width="209" src={logo} alt="1xchange logo" />
  </Styled.Sidebar>
);

export { LoginSidebar };
