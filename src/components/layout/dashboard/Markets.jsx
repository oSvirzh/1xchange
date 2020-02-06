import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../../styles/const';
import coin from '../../../assets/images/dashboard/bitcoin.svg';

const Markets = () => {
  return (
    <Styled.Wrapper>
      <Styled.Logo>
        Markets
      </Styled.Logo>
      <Styled.Markets>
        <Styled.Market>
          <Styled.MarketRow>
            1.
            <Styled.Coin src={coin} alt="coin"/>
            <Styled.CoinName>BTC-USD</Styled.CoinName>
          </Styled.MarketRow>
          <Styled.MarketRow>
            <Styled.CoinCost>9400.00</Styled.CoinCost>
            <Styled.CoinRate>-2,5%</Styled.CoinRate>
          </Styled.MarketRow>
        </Styled.Market>
        <Styled.Market>
          <Styled.MarketRow>
            2.
            <Styled.Coin src={coin} alt="coin"/>
            <Styled.CoinName>BTC-USD</Styled.CoinName>
          </Styled.MarketRow>
          <Styled.MarketRow>
            <Styled.CoinCost>9400.00</Styled.CoinCost>
            <Styled.CoinRate>-2,5%</Styled.CoinRate>
          </Styled.MarketRow>
        </Styled.Market>
      </Styled.Markets>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    background-color: ${colors.lightblue};
  `,
  Logo: styled.div`
    margin-right: 20px;
    color: ${colors.white};
    font-size: 18px;
    line-height: 23px;
  `,
  Markets: styled.div`
    display: flex;
  `,
  Market: styled.div`
    margin-left: 20px;
    margin-right: 20px;
    width: 166px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${colors.white};
  `,
  MarketRow: styled.div`
    
  `,
  CoinName: styled.span`
    position: relative;
    margin-left: 6px;
    padding-right: 44px;
    
    &:after {
    content: '';
    position: absolute;
    right: 24px;
    width: 10px;
    height: 6px;
    top: 50%;
    transform: translateY(-50%);
    background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBMNSA2TDEwIDBIMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=') no-repeat;
    }
  `,
  Coin: styled.img`
    margin-left: 6px;
  `,
  CoinCost: styled.span`
    font-size: 12px;
    line-height: 15px;
  `,
  CoinRate: styled.span`
    font-size: 12px;
    line-height: 15px;
    margin-right: 24px;
    margin-left: 8px;
  `,
};

export default Markets;
