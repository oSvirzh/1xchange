import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { InputStyled, LabelStyled } from './Input';
import { colors } from '../../styles/const';

const PhoneLabelStyled = styled(LabelStyled)``;

const PhoneInputStyled = styled(InputStyled)``;

const CodeStyled = styled(InputGroup.Text)`
  font-size: 16px;
  color: ${colors.blue};
  background: ${colors.white};
  border: 0.5px solid ${colors.gray};
`;

const PhoneInput = ({ label, placeholder, countryCode }) => {
  return (
    <Form.Group controlId="">
      <PhoneLabelStyled>{label}</PhoneLabelStyled>
      <InputGroup>
        <InputGroup.Prepend>
          <CodeStyled>{countryCode}</CodeStyled>
        </InputGroup.Prepend>
        <PhoneInputStyled placeholder={placeholder} />
      </InputGroup>
    </Form.Group>
  );
};

export default PhoneInput;
