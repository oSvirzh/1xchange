import { FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../styles/const';
import React from 'react';
import PropTypes from 'prop-types';
import FormItem from './FormItem';

const CodeInput = ({ label, placeholder, subText, ...props }) => {
  return (
    <FormItem label={label} subText={subText}>
      <StyledCodeInput {...props} placeholder={placeholder} />
    </FormItem>
  );
};

CodeInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  subText: PropTypes.string,
};

export const StyledCodeInput = styled(FormControl)`
  padding: 18px 20px;
  font-size: 16px;
  color: ${colors.blue};
  border-radius: 3px;
  border: 0.5px solid ${colors.gray};
  width: 100%;
  height: 56px;
  max-width: 208px;
  letter-spacing: 16px;
`;

export default CodeInput;
