import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../styles/const';
import feels from '../../../../assets/images/landing/advantages/feels.png';
import global from '../../../../assets/images/landing/advantages/global.png';
import phone from '../../../../assets/images/landing/advantages/phone.png';
import wallet from '../../../../assets/images/landing/advantages/wallet.png';
import xcoins from '../../../../assets/images/landing/advantages/1xcoins.png';

const Advantages = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>Unique positioning of Finxflo</Styled.Title>
      <Styled.Grid>
        <Styled.Item>
          <Styled.ItemImage src={wallet} />
          <Styled.ItemDesc>1 KYC, 1 Account, 1 Wallet</Styled.ItemDesc>
        </Styled.Item>
        <Styled.Item>
          <Styled.ItemImage src={feels} />
          <Styled.ItemDesc>Lower trading fees</Styled.ItemDesc>
        </Styled.Item>
        <Styled.Item>
          <Styled.ItemImage src={phone} />
          <Styled.ItemDesc>Unique user interface</Styled.ItemDesc>
        </Styled.Item>
        <Styled.Item>
          <Styled.ItemImage src={xcoins} />
          <Styled.ItemDesc>No withdrawal fees</Styled.ItemDesc>
        </Styled.Item>
        <Styled.Item>
          <Styled.ItemImage src={global} />
          <Styled.ItemDesc>Global best execution</Styled.ItemDesc>
        </Styled.Item>
      </Styled.Grid>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.section`
    padding-top: 30px;
    padding-bottom: 100px;
    position: relative;
    background-color: ${colors.lightblue};
  `,
  Title: styled.h2`
    font-size: 30px;
    line-height: 38px;
    font-weight: 400;
    text-align: center;
    color: ${colors.white};
  `,
  Grid: styled.div`
    margin: 100px 174px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: ${colors.white};
  `,
  Item: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 179px;
  `,
  ItemImage: styled.img`
    max-width: 100%;
    max-height: 150px;
    display: flex;
    flex-wrap: wrap;
    color: ${colors.white};
  `,
  ItemDesc: styled.p`
    margin-top: 20px;
    padding: 0 13px;
    color: ${colors.white};
    text-align: center;
    font-size: 16px;
    line-height: 26px;
    font-weight: 900;
  `,
};

export default Advantages;
