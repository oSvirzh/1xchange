import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/const';
import '../../../../src/styles/styles.scss';

const Menu = () => {
  return (
    <Styled.MenuWrapper>
        <Styled.Wrapper>
            <Styled.Title>
                Account Settings
            </Styled.Title>
            <Styled.Menu>
                <Styled.MenuItem>
                    My profile
                </Styled.MenuItem>
                <Styled.MenuItem>
                    Preferences
                </Styled.MenuItem>
                <Styled.MenuItem>
                    Security
                </Styled.MenuItem>
                <Styled.MenuItem>
                    Account Activity
                </Styled.MenuItem>
            </Styled.Menu>
        </Styled.Wrapper>
    </Styled.MenuWrapper>
  );
};

const Styled = {
    MenuWrapper: styled.div`
    position: relative;
    padding-top: 20px;
    padding-bottom: 8px;
    background: ${colors.lightblue};
    box-shadow: 0 20px 40px rgba(16, 22, 40, 0.2);
  `,
    Wrapper: styled.div`
    margin-left: 100px;
    margin-right: 100px;
  `,
    Title: styled.h1`
    color: ${colors.white};
    font-size: 30px;
    line-height: 38px;
    font-weight: 400;
  `,
    Menu: styled.ul`
    display: flex;
    margin-top: 20px;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    color: ${colors.white};
  `,
    MenuItem: styled.li`
    position: relative;
    
    :not(:first-child) {
    margin-left: 20px;
    }
    
    &::after {
    position: absolute;
    content: '';
    height: 2px;
    width: 95%;
    bottom: -8px;
    left: 0;
    background: linear-gradient(
    60.09deg,
    ${colors.orange} -11.76%,
    ${colors.yellow} 48.47%,
    ${colors.pink} 149.64%
  );
    }
  `,
};

export default Menu;
