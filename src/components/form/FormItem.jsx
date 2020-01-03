import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../styles/const';

const FormItem = ({
  label,
  children,
  subText,
  feedback,
  pretend,
  append,
  placeholder,
  type,
  input,
  error,
  ...props
}) => {
  const inputCmp =
    !children && input ? (
      <Styled.Input
        {...props}
        placeholder={placeholder}
        type={type}
        isValid={!error}
        className={error ? 'is-invalid' : null}
      />
    ) : (
      children
    );

  return (
    <Form.Group>
      {!!label && <Styled.Label>{label}</Styled.Label>}
      <Styled.InputGroup>
        {!!pretend && <InputGroup.Prepend>{pretend}</InputGroup.Prepend>}
        {!!inputCmp && inputCmp}
        {!!append && <Styled.Append>{append}</Styled.Append>}
      </Styled.InputGroup>
      <Styled.Feedback type="invalid">{feedback || error}</Styled.Feedback>
      <Form.Text className="text-muted">{subText}</Form.Text>
    </Form.Group>
  );
};

FormItem.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
  subText: PropTypes.string,
  feedback: PropTypes.string,
};

const Styled = {
  Label: styled(Form.Label)`
    font-size: 14px;
    color: ${colors.white};
    margin-bottom: 7px;
  `,
  Input: styled(Form.Control)`
    flex: 1 1 auto !important;
    padding: 18px 20px;
    font-size: 16px;
    color: ${colors.blue};
    border-radius: 3px;
    border: 0.5px solid ${colors.gray};
    width: 100%;
    height: 56px;
  `,
  InputGroup: styled(InputGroup)`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
  `,
  Append: styled(InputGroup.Append)`
    flex: 1 1 auto;
  `,
  Feedback: styled(Form.Control.Feedback)`
    display: block;
  `,
};

export default FormItem;
