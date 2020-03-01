import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import colapsedArrow from '../../../assets/images/colapsed-arrow.svg';

const TradeHistory = () => {
  const data = [
    {
      amount: 0.00264849,
      price: '$8819.3',
      time: '16:53:55',
    },
    {
      amount: 0.00264849,
      price: '$8819.3',
      time: '16:53:55',
    },
    {
      amount: 0.00264849,
      price: '$8819.3',
      time: '16:53:55',
    },
    {
      amount: 0.00264849,
      price: '$8819.3',
      time: '16:53:55',
    },
  ];

  const [isOpen, setIsOpen] = useState(true);

  const renderItems = data.map((item, index) => (
    <Styled.Row key={index}>
      <Styled.Item modifiers={[!isOpen && 'hidden']}>{item.amount}</Styled.Item>
      <Styled.Item>{item.price}</Styled.Item>
      <Styled.Item modifiers={[!isOpen && 'hidden']}>{item.time}</Styled.Item>
    </Styled.Row>
  ));

  return (
    <Styled.Container>
      <Styled.Title
        onClick={() => setIsOpen(!isOpen)}
        modifiers={[!isOpen && 'active']}
      >
        Trade history
      </Styled.Title>
      <Styled.Body>
        <Styled.Header>
          <Styled.Item modifiers={[!isOpen && 'hidden']}>
            Amount(BTC)
          </Styled.Item>
          <Styled.Item>Price(USD)</Styled.Item>
          <Styled.Item modifiers={[!isOpen && 'hidden']}>Time</Styled.Item>
        </Styled.Header>
        {renderItems}
      </Styled.Body>
    </Styled.Container>
  );
};

const Modifiers = {
  Title: {
    active: () => css`
      &:before {
        transform: rotate(180deg);
      }
    `,
  },
  Item: {
    hidden: () => css`
      font-size: 0;
      width: auto;
    `,
  },
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    color: #ffffff;
    box-shadow: 0px -20px 40px rgba(20, 30, 54, 0.8);
    z-index: 2;
  `,
  Title: styled.div`
    cursor: pointer;
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
    
    ${applyStyleModifiers(Modifiers.Title)};
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
    flex: 0 1 auto;
    :not(:first-child) {
      margin-left: 15px;
    }

    ${applyStyleModifiers(Modifiers.Item)};
  `,
};

export default TradeHistory;
