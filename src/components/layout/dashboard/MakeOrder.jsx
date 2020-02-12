import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import wavyIcon from '../../../assets/images/dashboard/wavy.svg';
import { colors } from '../../../styles/const';
import { Button } from 'react-bootstrap';
import Input from '../../form/CurrencyInput';

const MakeOrder = () => {
  return (
    <Styled.Container>
      <Styled.Title>Make Order</Styled.Title>
      <Styled.Body>
        <Styled.Header>
          <div>
            <Styled.Button>Buy</Styled.Button>
            <Styled.ButtonRed>Sell</Styled.ButtonRed>
          </div>
          <Styled.Tabs>
            <Styled.Tab>Market</Styled.Tab>
            <Styled.Tab>Limit</Styled.Tab>
            <Styled.Tab>Stop</Styled.Tab>
          </Styled.Tabs>
        </Styled.Header>
        <Input placeholder="Amount to buy" />
        <Styled.Row>
          <Styled.Item>
            Fee
            <Styled.Icon src={wavyIcon} alt="wavy" />
            0.00$
          </Styled.Item>
          <Styled.Item>
            Total
            <Styled.Icon src={wavyIcon} alt="wavy" />
            0.00$
          </Styled.Item>
        </Styled.Row>
        <Styled.Button>Place buy order</Styled.Button>
        <Styled.ButtonReverted>Advanced trading</Styled.ButtonReverted>
      </Styled.Body>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    flex-shrink: 0;
    color: #ffffff;
    width: 420px;
  `,
  Title: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    font-size: 16px;
    background: #1b2745;
  `,
  Header: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
  `,
  Tabs: styled.div`
    display: flex;
  `,
  Tab: styled.div`
    position: relative;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      height: 1px;
      width: 30px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(
        60.09deg,
        #de5118 -11.76%,
        #eda334 48.47%,
        #de1f73 149.64%
      );
    }

    :not(:first-child) {
      margin-left: 30px;
    }
  `,
  Body: styled.div`
    padding: 5px 17px 10px;
    background-color: #2e3e70;
  `,
  Row: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 23px;
  `,
  Item: styled.div`
    display: flex;
    font-size: 12px;
    font-weight: 600;

    :nth-child(2) {
      margin-left: 28px;
    }
  `,
  Icon: styled.img`
    margin: 0 13px;
  `,
  Button: styled(Button)`
    position: relative;
    font-size: 14px;
    color: ${colors.white};
    background: linear-gradient(44.6deg, #1f9202 5.42%, #36cf1d 157.56%);
    padding: 15px 30px;
    border-radius: 3px;
    border: none;
    box-shadow: 0 5px 10px rgba(20, 30, 54, 0.8);
    z-index: 1;
  `,
  ButtonRed: styled(Button)`
    position: relative;
    left: -4px;
    font-size: 14px;
    color: ${colors.white};
    background: linear-gradient(60.13deg, #de1818 29.95%, #9b1806 142.93%);
    padding: 15px 30px;
    border-radius: 3px;
    border: none;
    box-shadow: 0 5px 10px rgba(20, 30, 54, 0.8);
  `,
  ButtonReverted: styled(Button)`
    font-size: 14px;
    color: ${colors.white};
    background-color: transparent;
    border: 0.5px solid ${colors.orange};
    padding: 15px 30px;
    border-radius: 4px;
    margin-left: 20px;
  `,
};

export default MakeOrder;
