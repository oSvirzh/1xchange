import { InputGroup, FormControl, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../styles/const';
import React from 'react';
import PropTypes from 'prop-types';
import PasswordInput from './PasswordInput';

export const InputStyled = styled(FormControl)`
  padding: 18px 20px;
  font-size: 16px;
  color: ${colors.blue};
  border-radius: 3px;
  border: 0.5px solid ${colors.gray};
  width: 100%;
  height: 56px;
`;

export const LabelStyled = styled(Form.Label)`
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 7px;
`;

const Input = ({ label, placeholder, subText }) => {
  return (
    <Form.Group controlId="">
      <LabelStyled>{label}</LabelStyled>
      <InputStyled placeholder={placeholder} />
      <Form.Text className="text-muted">{subText}</Form.Text>
    </Form.Group>
  );
};

Input.propType = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  subText: PropTypes.string,
};

export default Input;
