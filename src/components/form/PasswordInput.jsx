import React, { useState } from 'react';
import styled from 'styled-components';
import { InputGroup, Button } from 'react-bootstrap';
import { StyledInput } from './Input';
import { colors } from '../../styles/const';
import PropTypes from 'prop-types';
import FormItem from './FormItem';

const PasswordInput = ({ label, placeholder, subText, ...props }) => {
  const [visible, setVisibility] = useState(false);
  return (
    <FormItem
      {...props}
      label={label}
      subText={subText}
      append={
        <Styled.Button
          variant="outline-secondary"
          onClick={() => setVisibility(!visible)}
        >
          {visible ? 'Hide' : 'Show'}
        </Styled.Button>
      }
      type={visible ? 'text' : 'password'}
      placeholder={placeholder}
      input
    />
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  subText: PropTypes.string,
};

const Styled = {
  Button: styled(Button)`
    font-size: 14px; // TODO should be 12
    color: ${colors.orange};
    background: ${colors.white};
    border: 0.5px solid ${colors.gray};
    border-left: none;
    padding: 0 20px;
    border-radius: 3px;
  `,
};

export default PasswordInput;
