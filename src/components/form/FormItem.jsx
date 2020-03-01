import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputGroup } from 'react-bootstrap';
import styled, {css} from 'styled-components';
import { colors } from '../../styles/const';
import {applyStyleModifiers} from 'styled-components-modifiers';

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
  sm,
  md,
  stretch,
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
    <Styled.FormGroup modifiers={[sm && 'sm', md && 'md', stretch && 'stretch']}>
      {!!label && <Styled.Label>{label}</Styled.Label>}
      <Styled.InputGroup>
        {!!pretend && <InputGroup.Prepend>{pretend}</InputGroup.Prepend>}
        {!!inputCmp && inputCmp}
        {!!append && <Styled.Append>{append}</Styled.Append>}
      </Styled.InputGroup>
      <Styled.Feedback type="invalid">{feedback || error}</Styled.Feedback>
      <Form.Text className="text-muted">{subText}</Form.Text>
    </Styled.FormGroup>
  );
};

FormItem.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
  subText: PropTypes.string,
  feedback: PropTypes.string,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  stretch: PropTypes.bool,
};

const InputModifiers = {
  sm: () => css`
    width: 98px;
    margin-left: 20px;
  `,
  md: () => css`
    width: 342px;
  `,
  stretch: () => css`
    width: 100%;
  `,
};

const Styled = {
  FormGroup: styled(Form.Group)`
   ${applyStyleModifiers(InputModifiers)};
  `,
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
