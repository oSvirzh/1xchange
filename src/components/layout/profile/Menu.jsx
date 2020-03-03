import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../../styles/const';
import '../../../../src/styles/styles.scss';
import { RouteConfig } from '../../../config/routeConfig';
import { Link, useHistory } from 'react-router-dom';
import { applyStyleModifiers } from 'styled-components-modifiers';

const menuList = [
  { name: 'My profile', url: RouteConfig.myProfile },
  { name: 'Preferences', url: RouteConfig.preferences },
  { name: 'Security', url: RouteConfig.security },
  //{ name: 'Account Activity', url: RouteConfig.accountActivity },
];

const Menu = () => {
  const history = useHistory();
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  history.listen(() => {
    setCurrentPath(window.location.pathname);
    console.log('currentPath', currentPath);
  });

  const menu = menuList.map(({ name, url }) => (
    <Styled.MenuItem modifiers={[currentPath === url && 'active']}>
      <Link to={url}>{name}</Link>
    </Styled.MenuItem>
  ));

  return (
    <Styled.MenuWrapper>
      <Styled.Wrapper>
        <Styled.Title>Account Settings</Styled.Title>
        <Styled.Menu>{menu}</Styled.Menu>
      </Styled.Wrapper>
    </Styled.MenuWrapper>
  );
};

const Modifiers = {
  MenuItem: {
    active: () => css`
      & a {
        font-weight: bold;
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
  },
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

    & a {
      color: ${colors.white};
    }

    :not(:first-child) {
      margin-left: 20px;
    }

    ${applyStyleModifiers(Modifiers.MenuItem)};
  `,
};

export default Menu;
