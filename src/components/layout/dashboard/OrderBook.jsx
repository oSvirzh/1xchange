import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import colapsedArrow from '../../../assets/images/colapsed-arrow.svg';
import { colors } from '../../../styles/const';
import { Image } from 'react-bootstrap';

const OrderBook = () => {
  const mock = [
    { size: '2,350.00', price: '$5,460.00', mySize: '-' },
    { size: '2,350.00', price: '$5,460.00', mySize: '-' },
    { size: '2,350.00', price: '$5,460.00', mySize: '-' },
  ];

  const [isOpen, setIsOpen] = useState(true);

  const elemets = mock.map(({ size, price, mySize }) => (
    <tr>
      <Styled.Item>
        <Styled.Line />
      </Styled.Item>
      <Styled.Item modifiers={[!isOpen && 'hidden']}>{size}</Styled.Item>
      <Styled.Item>{price}</Styled.Item>
      <Styled.Item modifiers={[!isOpen && 'hidden']}>{mySize}</Styled.Item>
    </tr>
  ));

  return (
    <Styled.Container>
      <Styled.Title
        onClick={() => setIsOpen(!isOpen)}
        modifiers={[!isOpen && 'active']}
      >
        <Styled.Sub modifiers={[!isOpen && 'hidden']}>
          <Styled.Button>+</Styled.Button>
          <Styled.Button>-</Styled.Button>
        </Styled.Sub>
        Order Book
      </Styled.Title>
      <Styled.Body>
        <Styled.Table striped bordered hover>
          <Styled.TableHead>
            <tr>
              <Styled.HeaderItem />
              <Styled.HeaderItem modifiers={[!isOpen && 'hidden']}>
                Market Size
              </Styled.HeaderItem>
              <Styled.HeaderItem>Price(USD)</Styled.HeaderItem>
              <Styled.HeaderItem modifiers={[!isOpen && 'hidden']}>
                My size
              </Styled.HeaderItem>
            </tr>
          </Styled.TableHead>
          <Styled.TableBody>
            {elemets}
            <tr>
              <Styled.Separator colspan="4">
                <span>USD spread</span>
                <span>50.0</span>
              </Styled.Separator>
            </tr>
            {elemets}
          </Styled.TableBody>
        </Styled.Table>
      </Styled.Body>
    </Styled.Container>
  );
};

const Modifiers = {
  Title: {
    active: () => css`
      &:after {
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
  Sub: {
    hidden: () => css`
      margin: 0;
      width: 0;
      overflow: hidden;
      flex-wrap: nowrap;
    `,
  },
};

const Styled = {
  Container: styled.div`
    flex-shrink: 0;
    color: #ffffff;
    box-shadow: 0px -20px 40px rgba(20, 30, 54, 0.8);
    z-index: 2;
    overflow: hidden;
  `,
  Title: styled.div`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    font-size: 16px;
    background: #1b2745;

    &:after {
      content: '';    
      height: 12px;
      width: 7px;
      right: 0;
      margin-left: auto;
      transform: rotate(180deg);
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url("${colapsedArrow}");
    }
    
    ${applyStyleModifiers(Modifiers.Title)};
  `,
  Sub: styled.p`
    display: flex;
    font-size: 12px;
    line-height: 15px;
    margin-right: 84px;
    margin-bottom: 0;

    ${applyStyleModifiers(Modifiers.Sub)};
  `,
  Line: styled.div`
    height: 15px;
    width: 40px;
    background: linear-gradient(66.41deg, #1f9202 5.42%, #36cf1d 157.56%);
  `,
  Separator: styled.td`
    padding: 5px 35px;
    background-color: ${colors.blue};
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
  `,
  Button: styled.button`
    margin-right: 2px;
    width: 24px;
    height: 24px;
    border: none;
    font-size: 16px;
    background-color: ${colors.orange};
    color: ${colors.white};
  `,
  Body: styled.div`
    padding: 10px 15px 0 0;
    background: #22305a;
    height: 100%;
  `,
  Table: styled(Table)``,
  TableHead: styled.thead`
    font-size: 12px;
  `,
  TableBody: styled.tbody`
    font-size: 10px;
    tr td:first-child {
      width: 51px;
      margin: 0;
    }
  `,
  Item: styled.td`
    ${applyStyleModifiers(Modifiers.Item)};
  `,
  HeaderItem: styled.th`
    ${applyStyleModifiers(Modifiers.Item)};
  `,
};

export default OrderBook;
