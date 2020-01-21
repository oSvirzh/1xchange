import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../styles/const';
import {
  Button,
  ButtonGroup,
} from '../../../../components/elements/buttons/Button';
import logo from '../../../../assets/images/logo.svg';
// import '../../../src/styles/styles.scss';

const Start = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>Start trading on 1xchange today</Styled.Title>
      <Button>Get started</Button>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 110px;
    position: relative;
    background-color: ${colors.lightblue};
  `,
  Title: styled.h2`
    text-align: center;
    color: ${colors.white};
    font-weight: normal;
  `,
};

export default Start;
