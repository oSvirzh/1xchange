import React from 'react';
import { InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../styles/const';
import wavyIcon from '../../assets/images/dashboard/wavy.svg';

const CurrencyInput = () => {
  return (
    <Styled.InputGroup>
      <Styled.Input placeholder="Amount to buy" />
      <Styled.CurrencyName>BTC</Styled.CurrencyName>
    </Styled.InputGroup>
  );
};

const Styled = {
  InputGroup: styled(InputGroup)`
    position: relative;
    margin-bottom: 20px;
  `,
  CurrencyName: styled.span`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: ${colors.orange};
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
  `,
  Input: styled.input`
    font-size: 14px;
    line-height: 18px;
    padding: 13px 20px;
    width: 100%;
    color: ${colors.blue};
    background: ${colors.white};
    border: 0.5px solid ${colors.gray};
    border-radius: 3px;
  `,
};

export default CurrencyInput;
