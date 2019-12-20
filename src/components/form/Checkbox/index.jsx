import React from 'react';
import { CheckboxContainer } from './CheckboxContainer';
import { HiddenCheckbox } from './HiddenCheckbox';
import { CheckboxLabel } from './CheckboxLabel';
import { StyledCheckbox } from './StyledCheckbox';
import PropTypes from 'prop-types';

const Checkbox = ({ children }) => (
  <CheckboxContainer>
    <HiddenCheckbox />
    <StyledCheckbox />
    <CheckboxLabel>{children}</CheckboxLabel>
  </CheckboxContainer>
);

Checkbox.propTypes = {
  children: PropTypes.any,
};

export { Checkbox };
