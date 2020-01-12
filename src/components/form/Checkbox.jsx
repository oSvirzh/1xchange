import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { colors } from '../../styles/const';

const Checkbox = ({ children, name, setFieldValue, error }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setFieldValue && setFieldValue(name, checked);
  }, [checked]);

  return (
    <Styled.CheckboxContainer>
      {/*<Styled.HiddenCheckbox />*/}
      <Styled.StyledCheckbox
        onClick={() => setChecked(!checked)}
        modifiers={checked && 'active'}
      />
      <Styled.CheckboxLabel modifiers={!!error && 'error'}>
        {children}
      </Styled.CheckboxLabel>
    </Styled.CheckboxContainer>
  );
};

Checkbox.propTypes = {
  children: PropTypes.any,
};

const StyleModifiers = {
  StyledCheckbox: {
    active: () => css`
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
  },
  CheckboxLabel: {
    error: () => css`
      color: ${colors.pink};
    `,
  },
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
    width: 100px;
  `,
  StyledCheckbox: styled.div`
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid ${colors.orange};

    ${applyStyleModifiers(StyleModifiers.StyledCheckbox)};
  `,
  CheckboxLabel: styled.span`
    margin-left: 10px;
    color: ${colors.white};
    font-size: 14px;
    
    ${applyStyleModifiers(StyleModifiers.CheckboxLabel)};
  `,
};

export { Checkbox };
