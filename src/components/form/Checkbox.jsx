import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles/const';

const Checkbox = ({ children }) => (
  <Styled.CheckboxContainer>
    <Styled.HiddenCheckbox />
    <Styled.StyledCheckbox />
    <Styled.CheckboxLabel>{children}</Styled.CheckboxLabel>
  </Styled.CheckboxContainer>
);

Checkbox.propTypes = {
  children: PropTypes.any,
};

const Styled = {
  CheckboxContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  HiddenCheckbox: styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `,
  StyledCheckbox: styled.span`
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid ${colors.orange};

    &::before {
      position: absolute;
      bottom: 4px;
      left: 4px;
      content: '';
      width: 6px;
      height: 8px;
      transform: rotate(45deg);
      border: solid ${colors.orange};
      border-width: 0 2px 2px 0;
    }
  `,
  CheckboxLabel: styled.span`
    margin-left: 10px;
    color: ${colors.white};
    font-size: 14px;
  `,
};

export { Checkbox };
