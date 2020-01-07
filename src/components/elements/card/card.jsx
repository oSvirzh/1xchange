import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/const';
import crossIcon from '../../../assets/images/cross-in-circle.svg';

const CardWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: -10px;
  margin-right: -10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  margin-left: 10px;
  margin-right: 10px;
  padding: 30px 20px 20px;
  width: 157px;
  background-color: ${colors.white};
  border-radius: 6px;
`;

const CardImage = styled.img`
  flex: 1 0 auto;
`;

const CardName = styled.div`
  margin-top: 20px;
  color: ${colors.blue};
`;

const Link = styled.a`
  position: relative;
  display: block;
  margin-top: 62px;
  padding-left: 22px;
  color: ${colors.white};
  
  &::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 16px;
  height: 16px;
  background-image: url("${crossIcon}");
  transform: translateY(-50%);
  }
`;

export { Card, CardWrapper, CardImage, CardName, Link };
