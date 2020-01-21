import React from 'react';
import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { Link as LinkComponent } from 'react-router-dom';
import { colors } from '../../../styles/const';
import PropTypes from 'prop-types';

const Link = ({ to, reverted, children }) => (
  <ButtonStyled modifiers={['link', reverted && 'reverted']}>
    <LinkStyled to={to}>{children}</LinkStyled>
  </ButtonStyled>
);

Link.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
  reverted: PropTypes.bool,
};

const Button = ({
  to,
  children,
  onClick,
  cleanTopMargin,
  reverted,
  ...props
}) => {
  const button = (
    <ButtonStyled
      {...props}
      as={to ? (to.startsWith('http') ? 'a' : Link) : 'button'}
      to={to && to.startsWith('http') ? undefined : to}
      href={to && to.startsWith('http') ? to : undefined}
      onClick={onClick}
      reverted={reverted}
      modifiers={reverted && 'reverted'}
    >
      <span>{children}</span>
    </ButtonStyled>
  );
  if (cleanTopMargin) return button;
  return <ButtonGroup>{button}</ButtonGroup>;
};

Button.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

const ButtonModifiers = {
  reverted: () => css`
    border: solid 3px #eda334;
    position: relative;
    background: #15213d;
  `,
  link: () => css`
    padding: 0;
  `,
};

const ButtonStyled = styled.button`
  display: block;
  padding: 18px 30px;
  font-size: 16px;
  line-height: 20px;
  background: linear-gradient(
    60.09deg,
    ${colors.orange} -11.76%,
    ${colors.yellow} 48.47%,
    ${colors.pink} 149.64%
  );
  border-radius: 4px;
  border: none;
  color: ${colors.white};

  :not(:first-child) {
    margin-left: 20px;
  }

  ${applyStyleModifiers(ButtonModifiers)};
`;

const LinkStyled = styled(LinkComponent)`
  display: block;
  padding: 18px 30px;
  text-decoration: none;
  color: ${colors.white};
  :hover {
    text-decoration: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 30px;
`;

export { Button, ButtonGroup };
