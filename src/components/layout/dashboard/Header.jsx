import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../../styles/const';
import logo from '../../../assets/images/logo.svg';

const Header = () => {
  return (
    <Styled.Header>
      <img src={logo} alt="logo" />
      <Styled.Menu>
        <Styled.MenuItem>My orders</Styled.MenuItem>
        <Styled.MenuItem>My wallets</Styled.MenuItem>
        <Styled.Avatar roundedCircle src="https://via.placeholder.com/28" />
      </Styled.Menu>
    </Styled.Header>
  );
};

const Styled = {
  Header: styled.header`
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Menu: styled.ul`
    display: flex;
    color: ${colors.white};
    margin-bottom: 0;
    list-style: none;
  `,
  MenuItem: styled.li`
    font-size: 18px;
    line-height: 23px;

    &:not(:first-child) {
      margin-left: 50px;
    }
  `,
  Avatar: styled(Image)`
    width: 28px;
    height: 28px;
    border-radius: 100%;
    overflow: hidden;
    margin-left: 30px;
  `,
};

export default Header;
