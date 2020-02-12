import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import colapsedArrow from '../../../assets/images/colapsed-arrow.svg';
import { colors } from '../../../styles/const';
import { Image } from 'react-bootstrap';

const OrderBook = () => {
  return (
    <Styled.Container>
      <Styled.Title>
        <Styled.Sub>
          <Styled.Button>+</Styled.Button>
          <Styled.Button>-</Styled.Button>
        </Styled.Sub>
        Order Book
      </Styled.Title>
      <Styled.Body>
        <Styled.Table striped bordered hover>
          <Styled.TableHead>
            <tr>
              <th />
              <th>Market Size</th>
              <th>Price(USD)</th>
              <th>My size</th>
            </tr>
          </Styled.TableHead>
          <Styled.TableBody>
            <tr>
              <td>
                <Styled.Line />
              </td>
              <td>2,350.00</td>
              <td>$2,460.00</td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                <Styled.Line />
              </td>
              <td>15,350.00</td>
              <td>$5,460.00</td>
              <td>-</td>
            </tr>
          </Styled.TableBody>
        </Styled.Table>
        <Styled.Separator>
          <span>USD spread</span>
          <span>50.0</span>
        </Styled.Separator>
        <Styled.Table striped bordered hover>
          <Styled.TableBody>
            <tr>
              <td>
                <Styled.Line />
              </td>
              <td>2,350.00</td>
              <td>$2,460.00</td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                <Styled.Line />
              </td>
              <td>15,350.00</td>
              <td>$5,460.00</td>
              <td>-</td>
            </tr>
          </Styled.TableBody>
        </Styled.Table>
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
  `,
  Sub: styled.p`
    font-size: 12px;
    line-height: 15px;
    margin-right: 84px;
    margin-bottom: 0;
  `,
  Line: styled.div`
    height: 15px;
    width: 40px;
    background: linear-gradient(66.41deg, #1f9202 5.42%, #36cf1d 157.56%);
  `,
  Separator: styled.div`
    display: flex;
    justify-content: space-between;
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
  Table: styled(Table)`
    width: 270px;
  `,
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
  Header: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 15px;
    font-weight: 900;
  `,
  Row: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 5px 0;
  `,
  Item: styled.div`
    width: 100px;
    flex: 1 1 auto;
    :not(:first-child) {
      margin-left: 15px;
    }
  `,
};

export default OrderBook;
