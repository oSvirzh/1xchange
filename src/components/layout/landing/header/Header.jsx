import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../styles/const';
import { Button } from '../../../elements/buttons/Button';
import logo from '../../../../assets/images/logo.png';
import { RouteConfig } from '../../../../config/routeConfig';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Styled.Header>
      <Link to={RouteConfig.root}>
        <img src={logo} alt="logo" />
      </Link>
      {/*<Styled.Menu>*/}
      {/*  <Styled.MenuItem>Markets</Styled.MenuItem>*/}
      {/*  <Styled.MenuItem>View Exchange</Styled.MenuItem>*/}
      {/*  <Styled.MenuItem>Help</Styled.MenuItem>*/}
      {/*  <Styled.MenuItem>Fees</Styled.MenuItem>*/}
      {/*</Styled.Menu>*/}
      <Styled.ButtonGroup>
        <Button cleanTopMargin reverted to={RouteConfig.login}>
          Log In
        </Button>
        <Button cleanTopMargin to={RouteConfig.register}>
          Sign Up
        </Button>
      </Styled.ButtonGroup>
    </Styled.Header>
  );
};

const Styled = {
  Header: styled.header`
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & img {
      max-width: 120px;
    }
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
  ButtonGroup: styled.div`
    display: flex;
  `,
};

export default Header;
