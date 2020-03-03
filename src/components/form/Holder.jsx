import React from 'react';
import FormItem from './FormItem';
import styled from 'styled-components';
import { colors } from '../../styles/const';

const Holder = ({ children, onEdit, ...props }) => {
  return (
    <FormItem {...props}>
      <Styled.Value>
        {children}
        <Styled.ContactEdit onClick={onEdit && onEdit}>Edit</Styled.ContactEdit>
      </Styled.Value>
    </FormItem>
  );
};

const Styled = {
  Value: styled.p`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 16px;
    color: ${colors.white};
  `,
  ContactEdit: styled.button`
    background: transparent;
    border: none;
    font-size: 12px;
    line-height: 15px;
    font-weight: 600;
    color: ${colors.orange};
  `,
};

export default Holder;
