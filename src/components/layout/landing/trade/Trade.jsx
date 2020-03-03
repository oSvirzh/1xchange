import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../styles/const';
import threeMarketsScreen from '../../../../assets/images/landing/three-matkets-screen.png';
// import '../../../src/styles/styles.scss';

const Trade = () => {
  return (
    <Styled.TradeWrapper>
      <Styled.ImagesWrapper>
        <Styled.ImageGeneral src={threeMarketsScreen} alt="" />
      </Styled.ImagesWrapper>
    </Styled.TradeWrapper>
  );
};

const Styled = {
  TradeWrapper: styled.section`
    display: flex;
    justify-content: center;
    padding: 50px 128px 45px;
    height: 783px;
    position: relative;
    color: ${colors.white};
    background: linear-gradient(170deg, transparent 70%, #22305a 22%);
  `,
  ImageGeneral: styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 1140px;
    height: auto;
  `,
  ImageTwomarkets: styled.img`
    position: absolute;
    left: 158px;
    top: 182px;
    width: 746px;
    height: auto;
  `,
  ImageFourmarkets: styled.img`
    position: absolute;
    left: 364px;
    top: 258px;
    width: 746px;
    height: auto;
  `,

  IntroSubTitle: styled.p`
    margin-top: 30px;
    margin-bottom: 0;
    max-width: 530px;
    font-size: 14px;
    line-height: 24px;
  `,
  ImagesWrapper: styled.div`
    position: relative;
    width: 1110px;
  `,
};

export default Trade;
