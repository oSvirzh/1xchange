import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../styles/const';
import {
    Button,
    ButtonGroup,
} from '../../../../components/elements/buttons/Button';
import tradeGeneral from '../../../../assets/images/landing/trade-two-markets.png';
// import '../../../src/styles/styles.scss';

const Trade = () => {
  return (
    <Styled.TradeWrapper>
      <Styled.ImageGeneral src={tradeGeneral} alt="" />
    </Styled.TradeWrapper>
  );
};

const Styled = {
  TradeWrapper: styled.section`
    margin: 50px 128px 45px;
    height: 500px;
    position: relative;
    color: ${colors.white};
  `,
    ImageGeneral: styled.img`
    position: absolute;
    left: 0;
    top: 0;
  `,
    IntroSubTitle: styled.p`
margin-top: 30px;
margin-bottom: 0;
    max-width: 530px;
    font-size: 14px;
    line-height: 24px;
  `,
};

export default Trade;
