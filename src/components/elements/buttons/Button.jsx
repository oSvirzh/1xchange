import React from 'react';
import styled from 'styled-components';
import { Link as LinkComponent } from 'react-router-dom';
import { colors } from '../../../styles/const';
import PropTypes from 'prop-types';

const ButtonStyled = styled.div`
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

const ButtonGroupStyled = styled.div`
  margin-top: 30px;
`;

const Link = ({ to, children }) => (
  <LinkComponent to={to}>{children}</LinkComponent>
);

Link.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
};

const ButtonCmp = ({ to, children, onClick }) => {
  return (
    <ButtonGroupStyled>
      <ButtonStyled
        as={to ? (to.startsWith('http') ? 'a' : Link) : 'button'}
        to={to && to.startsWith('http') ? undefined : to}
        href={to && to.startsWith('http') ? to : undefined}
        onClick={onClick}
      >
        {children}
      </ButtonStyled>
    </ButtonGroupStyled>
  );
};

ButtonCmp.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export { ButtonCmp as Button };
export { ButtonGroupStyled as ButtonGroup };
