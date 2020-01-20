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
        <Styled.Title>
            Start trading on 1xchange today
        </Styled.Title>
    </Styled.Wrapper>
  );
};

const Styled = {
    Wrapper: styled.section`
    padding-top: 100px;
    padding-bottom: 110px;
    position: relative;
    background-color: ${colors.lightblue};
  `,
    Title: styled.h2`
    text-align: center;
    color: ${colors.white};
  `,
};

export default Start;
