import { FormControl, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../styles/const';
import React from 'react';

export const InputStyled = styled(FormControl)`
  padding: 18px 20px;
  font-size: 16px;
  color: ${colors.blue};
  border-radius: 3px;
  border: 0.5px solid ${colors.gray};
  max-width: 460px;
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

export default Input;
