import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../styles/const';
import {
    Button,
    ButtonGroup,
} from '../../../../components/elements/buttons/Button';
import logo from '../../../../assets/images/logo.svg';
// import '../../../src/styles/styles.scss';

const Header = () => {
  return (
    <Styled.Header>
        <img src={logo} alt="logo"/>
        <Styled.Menu>
            <Styled.MenuItem>Markets</Styled.MenuItem>
            <Styled.MenuItem>View Exchange</Styled.MenuItem>
            <Styled.MenuItem>Help</Styled.MenuItem>
            <Styled.MenuItem>Fees</Styled.MenuItem>
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
};

export default Header;
