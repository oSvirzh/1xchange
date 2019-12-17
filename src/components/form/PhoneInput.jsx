import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { InputStyled, LabelStyled } from './Input';

const PhoneLabelStyled = styled(LabelStyled)``;

const PhoneInputStyled = styled(InputStyled)``;

const PhoneInput = ({ label, placeholder, countryCode }) => {
  return (
    <Form.Group controlId="">
      <PhoneLabelStyled>{label}</PhoneLabelStyled>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>{countryCode}</InputGroup.Text>
        </InputGroup.Prepend>
        <PhoneInputStyled placeholder={placeholder} />
      </InputGroup>
    </Form.Group>
  );
};

export default PhoneInput;
