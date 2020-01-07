import React from 'react';
import styled from 'styled-components';
import { Link as LinkComponent } from 'react-router-dom';
import { colors } from '../../../styles/const';
import PropTypes from 'prop-types';

const Link = ({ to, children }) => (
  <ButtonStyled>
    <LinkStyled to={to}>{children}</LinkStyled>
  </ButtonStyled>
);

Link.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
};

const Button = ({ to, children, onClick, ...props }) => {
  return (
    <ButtonStyled
      {...props}
      as={to ? (to.startsWith('http') ? 'a' : Link) : 'button'}
      to={to && to.startsWith('http') ? undefined : to}
      href={to && to.startsWith('http') ? to : undefined}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
  onClick: PropTypes.func,
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
`;

const LinkStyled = styled(LinkComponent)`
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
