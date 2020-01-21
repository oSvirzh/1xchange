import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../styles/const';
import {
  Button,
  ButtonGroup,
} from '../../../../components/elements/buttons/Button';
import logo from '../../../../assets/images/logo.svg';
// import '../../../src/styles/styles.scss';

const Footer = () => {
  return (
    <Styled.Footer>
      <img src={logo} alt="logo" />
      <Styled.MenuWrapper>
        <Styled.Menu>
          <Styled.MenuItem bold>Contact Us</Styled.MenuItem>
          <Styled.MenuItem>support@sfox.com</Styled.MenuItem>
          <Styled.MenuItem>PR@sfox.com</Styled.MenuItem>
        </Styled.Menu>
        <Styled.Menu>
          <Styled.MenuItem bold>Company</Styled.MenuItem>
          <Styled.MenuItem>About</Styled.MenuItem>
          <Styled.MenuItem>Algorithm</Styled.MenuItem>
          <Styled.MenuItem>Pricing</Styled.MenuItem>
          <Styled.MenuItem>Blog</Styled.MenuItem>
          <Styled.MenuItem>Support</Styled.MenuItem>
        </Styled.Menu>
        <Styled.Menu>
          <Styled.MenuItem bold>Navigations</Styled.MenuItem>
          <Styled.MenuItem>Markets</Styled.MenuItem>
          <Styled.MenuItem>View Exchange</Styled.MenuItem>
          <Styled.MenuItem>Help</Styled.MenuItem>
          <Styled.MenuItem>Fees</Styled.MenuItem>
        </Styled.Menu>
        <Styled.Menu>
          <Styled.MenuItem bold>Social</Styled.MenuItem>
          <Styled.MenuItem>Facebook</Styled.MenuItem>
          <Styled.MenuItem>Twitter</Styled.MenuItem>
          <Styled.MenuItem>Instagram</Styled.MenuItem>
        </Styled.Menu>
      </Styled.MenuWrapper>
    </Styled.Footer>
  );
};

const Styled = {
  Footer: styled.footer`
    margin-right: 50px;
    margin-left: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    align-items: flex-start;
  `,
  MenuWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 100px;
  `,
  Menu: styled.ul`
    display: flex;
    flex: 1 0;
    flex-direction: column;
    color: ${colors.white};
    margin-bottom: 0;
    padding: 0;
    list-style: none;
  `,
  MenuItem: styled.li`
    font-size: 18px;
    line-height: 40px;

    ${(props) => props.bold && 'font-weight: bold;'}
  `,
};

export default Footer;
