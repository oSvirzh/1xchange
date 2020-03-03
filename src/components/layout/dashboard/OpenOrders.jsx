import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import colapsedArrow from '../../../assets/images/colapsed-arrow.svg';
import cross from '../../../assets/images/dashboard/cross.svg';

const OpenOrders = () => {
  return (
    <Styled.Container>
      <Styled.Title>
        <Styled.Sub>Cancel all</Styled.Sub>
        Open orders
      </Styled.Title>
      <Styled.Body>
        <Styled.Table striped bordered hover>
          <Styled.TableHead>
            <tr>
              <th>Type</th>
              <th>Size</th>
              <th>Price(USD)</th>
              <th>Filled</th>
              <th />
            </tr>
          </Styled.TableHead>
          <Styled.TableBody>
            <tr>
              <td>Buy</td>
              <td>0.021325</td>
              <td>$2,350.00</td>
              <td>30%</td>
              <td>
                <img src={cross} alt="close trade" />
              </td>
            </tr>
            <tr>
              <td>Buy</td>
              <td>0.032425</td>
              <td>$22,350.00</td>
              <td>50%</td>
              <td>
                <img src={cross} alt="close trade" />
              </td>
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
    display: flex;
    flex-direction: column;
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
    margin-bottom: 15px;
    font-weight: 900;
  `,
  Table: styled(Table)`
    width: 407px;
  `,
  TableHead: styled.thead`
    font-size: 12px;
  `,
  TableBody: styled.tbody`
    font-size: 10px;
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

export default OpenOrders;
