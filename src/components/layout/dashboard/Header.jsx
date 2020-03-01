import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../../styles/const';
import logo from '../../../assets/images/logo.svg';
import alert from '../../../assets/images/dashboard/alert.png';
import oneSection from '../../../assets/images/dashboard/one-section.png';
import twoSections from '../../../assets/images/dashboard/two-sections.png';
import fourSections from '../../../assets/images/dashboard/four-sections.png';

const Header = () => {
  return (
    <Styled.Header>
      <Styled.Logo>
        <img src={logo} alt="logo" />
      </Styled.Logo>
      <Styled.Tabs>
        <Styled.Tab>
          <img src={oneSection} alt="one market" />
          <Styled.TabText>1 market</Styled.TabText>
        </Styled.Tab>
        <Styled.Tab>
          <img src={twoSections} alt="two market" />
          <Styled.TabText>2 markets</Styled.TabText>
        </Styled.Tab>
        <Styled.Tab>
          <img src={fourSections} alt="four market" />
          <Styled.TabText>4 markets</Styled.TabText>
        </Styled.Tab>
      </Styled.Tabs>
      <Styled.Menu>
        <Styled.MenuItem>My orders</Styled.MenuItem>
        <Styled.MenuItem>My wallets</Styled.MenuItem>
        <Styled.Alert src={alert} />
        <Styled.Avatar roundedCircle src="https://via.placeholder.com/28" />
      </Styled.Menu>
    </Styled.Header>
  );
};

const Styled = {
  Header: styled.header`
    padding: 20px 40px;
    display: flex;
    align-items: center;
  `,
  Logo: styled.div`
    width: 205px;
  `,
  Tabs: styled.div`
    display: flex;
  `,
  Tab: styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
  `,
  TabText: styled.p`
    margin-bottom: 0;
    margin-left: 20px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    color: ${colors.white};
  `,
  Menu: styled.ul`
    display: flex;
    color: ${colors.white};
    margin-left: auto;
    margin-bottom: 0;
    list-style: none;
    padding: 0;
  `,
  MenuItem: styled.li`
    font-size: 18px;
    line-height: 23px;

    &:not(:first-child) {
      margin-left: 50px;
    }
  `,
  Alert: styled.img`
    margin-left: 40px;
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
