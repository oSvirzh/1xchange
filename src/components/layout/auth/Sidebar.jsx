import React from 'react';
import logo from '../../../assets/images/logo.png';
import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { colors } from '../../../styles/const';

const Sidebar = () => (
  <Styled.Sidebar>
    <img src={logo} alt="fxf logo" />
    <Styled.Steps>
      <Styled.Item>
        <Styled.Number number="1" modifiers="active" />
        <Styled.Name>Create an acсount</Styled.Name>
      </Styled.Item>
      <Styled.Item>
        <Styled.Number number="2" />
        <Styled.Name>Profile information</Styled.Name>
      </Styled.Item>
      {/*<Styled.Item>*/}
      {/*  <Styled.Number number="3" />*/}
      {/*  <Styled.Name>ID Identification</Styled.Name>*/}
      {/*</Styled.Item>*/}
    </Styled.Steps>
  </Styled.Sidebar>
);

const StyleModifiers = {
  Name: {
    active: () => css`
      &_active {
        color: #fff;
        opacity: 1;

        &::after {
          background-color: ${colors.orange};
          opacity: 1;
        }
      }
    `,
  },
  Number: {
    active: () => css`
      border: 1px solid ${colors.orange};
      color: #fff;

      &::after {
        background-color: ${colors.yellow};
        opacity: 1;
        box-shadow: 0 4px 20px ${colors.yellow};
      }
    `,
  },
};

const Styled = {
  Sidebar: styled.div`
    background: linear-gradient(
      325.95deg,
      #101728 -143.03%,
      #11192b -3.81%,
      #15213d 58.69%,
      #0c1834 131.65%
    );
    max-width: 500px;
    width: 100%;
    padding: 40px;

    img {
      max-width: 120px;
    }
  `,
  Item: styled.li`
    display: flex;
    align-items: center;

    font-weight: 800;
    font-size: 18px;

    &:not(:last-child) {
      margin-bottom: 64px;
    }

    &:last-child span:before {
      content: none;
    }
  `,
  Name: styled.div`
    color: #c4c4c4;
    position: relative;
    padding-left: 17px;
    margin-left: 14px;
    opacity: 0.6;
    font-weight: 400;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 7px;
      height: 7px;
      background-color: ${colors.white};
      opacity: 0.5;
      left: 0;
      border-radius: 50%;
    }
  `,
  Number: styled.span`
    color: #1d1d29;
    position: relative;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  
    &::before {
      content: '';
      position: absolute;
      width: 1px;
      height: 54px;
      background-color: ${colors.white};
      opacity: 0.2;
      bottom: -60px;
    }
  
    &::after {
      content: '${(props) => props.number}';
      position: absolute;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
      opacity: 0.5;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    ${applyStyleModifiers(StyleModifiers.Number)};
  `,
  Steps: styled.ul`
    padding-left: 64px;
    margin-top: 124px;
  `,
};

export { Sidebar };
