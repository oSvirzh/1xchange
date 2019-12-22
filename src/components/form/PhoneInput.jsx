import React from 'react';
import { InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { StyledInput } from './Input';
import { colors } from '../../styles/const';
import PropTypes from 'prop-types';
import FormItem from './FormItem';

const CodeStyled = styled(InputGroup.Text)`
  font-size: 16px;
  color: ${colors.blue};
  background: ${colors.white};
  border: 0.5px solid ${colors.gray};
`;

const PhoneInput = ({ label, placeholder, countryCode }) => {
  return (
    <FormItem label={label}>
      <InputGroup>
        <InputGroup.Prepend>
          <CodeStyled>{countryCode}</CodeStyled>
        </InputGroup.Prepend>
        <StyledInput placeholder={placeholder} />
      </InputGroup>
    </FormItem>
  );
};

PhoneInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  countryCode: PropTypes.string,
};

export default PhoneInput;
