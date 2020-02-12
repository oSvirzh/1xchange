import React, { useState } from 'react';
import styled from 'styled-components';
import colapsedArrow from '../../../assets/images/colapsed-arrow.svg';

const TradeHistory = () => {
  return (
    <Styled.Container>
      <Styled.Title>Trade history</Styled.Title>
      <Styled.Body>
        <Styled.Header>
          <Styled.Item>Amount(BTC)</Styled.Item>
          <Styled.Item>Price(USD)</Styled.Item>
          <Styled.Item>Time</Styled.Item>
        </Styled.Header>
        <Styled.Row>
          <Styled.Item>0.00264849</Styled.Item>
          <Styled.Item>$8819.3</Styled.Item>
          <Styled.Item>16:53:55</Styled.Item>
        </Styled.Row>
        <Styled.Row>
          <Styled.Item>0.00264849</Styled.Item>
          <Styled.Item>$8819.3</Styled.Item>
          <Styled.Item>16:53:55</Styled.Item>
        </Styled.Row>
        <Styled.Row>
          <Styled.Item>0.00264849</Styled.Item>
          <Styled.Item>$8819.3</Styled.Item>
          <Styled.Item>16:53:55</Styled.Item>
        </Styled.Row>
      </Styled.Body>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    flex-shrink: 0;
    color: #ffffff;
    box-shadow: 0px -20px 40px rgba(20, 30, 54, 0.8);
    z-index: 2;
  `,
  Title: styled.div`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    font-size: 16px;
    background: #1b2745;

    &:before {
      content: '';    
      height: 12px;
      width: 7px;
      margin-right: 50px;
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url("${colapsedArrow}");
    }
  `,
  Body: styled.div`
    padding: 10px 15px;
    background: #22305a;
    height: 100%;
  `,
  Header: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    font-weight: 900;
  `,
  Row: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 5px 0;
    font-weight: 600;
    font-size: 10px;
    line-height: 16px;
  `,
  Item: styled.div`
    width: 100px;
    flex: 1 1 auto;
    :not(:first-child) {
      margin-left: 15px;
    }
  `,
};

export default TradeHistory;
