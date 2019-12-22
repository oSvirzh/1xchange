import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../styles/const';
import React from 'react';
import PropTypes from 'prop-types';

const FormItem = ({ label, children, subText }) => {
  return (
    <Form.Group controlId="">
      <Styled.Label>{label}</Styled.Label>
      {children}
      <Form.Text className="text-muted">{subText}</Form.Text>
    </Form.Group>
  );
};

FormItem.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
  subText: PropTypes.string,
};

const Styled = {
  Label: styled(Form.Label)`
    font-size: 14px;
    color: ${colors.white};
    margin-bottom: 7px;
  `,
};

export default FormItem;
