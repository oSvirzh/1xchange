import { FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../styles/const';
import React from 'react';
import PropTypes from 'prop-types';
import FormItem from './FormItem';

const Input = ({ label, placeholder, subText }) => {
  return (
    <FormItem label={label} subText={subText}>
      <StyledInput placeholder={placeholder} />
    </FormItem>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  subText: PropTypes.string,
};

export const StyledInput = styled(FormControl)`
  padding: 18px 20px;
  font-size: 16px;
  color: ${colors.blue};
  border-radius: 3px;
  border: 0.5px solid ${colors.gray};
  width: 100%;
  height: 56px;
`;

export default Input;
