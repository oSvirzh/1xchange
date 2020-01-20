import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../styles/const';
import {
    Button,
    ButtonGroup,
} from '../../../../components/elements/buttons/Button';
// import '../../../src/styles/styles.scss';

const Intro = () => {
  return (
    <Styled.Intro>
        <Styled.IntroTitle>
            One account, one portal, one wallet and one exchange
            is equal Global BBO
        </Styled.IntroTitle>
        <Styled.IntroSubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Styled.IntroSubTitle>
        <Button>Get started</Button>
    </Styled.Intro>
  );
};

const Styled = {
  Intro: styled.section`
    margin: 80px 0 45px;
    color: ${colors.white};
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
  `,
    IntroTitle: styled.h1`
    max-width: 753px;
    font-size: 30px;
    line-height: 38px;
    font-weight: 400;
  `,
    IntroSubTitle: styled.p`
    margin-top: 30px;
    margin-bottom: 0;
    max-width: 530px;
    font-size: 14px;
    line-height: 24px;
  `,
};

export default Intro;
