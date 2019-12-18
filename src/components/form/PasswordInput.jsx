import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { InputStyled, LabelStyled } from './Input';
import { colors } from '../../styles/const';
import AuthPage from '../../pages/auth/AuthPage';
import PropTypes from 'prop-types';

const ButtonStyled = styled(Button)`
  font-size: 14px; // TODO should be 12
  color: ${colors.orange};
  background: ${colors.white};
  border: 0.5px solid ${colors.gray};
  border-left: none;
  padding: 0 20px;
  border-radius: 3px;
`;

const PasswordInput = ({ label, placeholder, subText }) => {
  const [visible, setVisibility] = useState(false);
  return (
    <Form.Group controlId="">
      <LabelStyled>{label}</LabelStyled>
      <InputGroup>
        <InputStyled
          type={visible ? 'text' : 'password'}
          placeholder={placeholder}
        />
        <InputGroup.Append>
          <ButtonStyled
            variant="outline-secondary"
            onClick={() => setVisibility(!visible)}
          >
            {visible ? 'Hide' : 'Show'}
          </ButtonStyled>
        </InputGroup.Append>
      </InputGroup>
      <Form.Text className="text-muted">{subText}</Form.Text>
    </Form.Group>
  );
};

PasswordInput.propType = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  subText: PropTypes.string,
};

export default PasswordInput;
