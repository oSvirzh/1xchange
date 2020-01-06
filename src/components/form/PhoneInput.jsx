import React from 'react';
import { InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../styles/const';
import PropTypes from 'prop-types';
import FormItem from './FormItem';

const PhoneInput = ({ label, placeholder, countryCode, ...props }) => {
  return (
    <FormItem
      {...props}
      label={label}
      placeholder={placeholder}
      pretend={<Styled.Code>{countryCode}</Styled.Code>}
      input
    />
  );
};

const Styled = {
  Code: styled(InputGroup.Text)`
    font-size: 16px;
    color: ${colors.blue};
    background: ${colors.white};
    border: 0.5px solid ${colors.gray};
  `,
};

PhoneInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  countryCode: PropTypes.string,
};

export default PhoneInput;
