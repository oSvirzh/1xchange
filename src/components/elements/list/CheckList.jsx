import React from 'react';
import { chunk } from 'lodash';
import styled from 'styled-components';
import { colors } from '../../../styles/const';
import icon from '../../../assets/images/checked.svg';

const CheckList = ({ columns = 1, list }) => {
  const chunkedList = chunk(list, columns);

  return chunkedList.map((row, index) => {
    return (
      <Styled.CheckListWrapper key={index}>
        {row.map((item, itemIndex) => (
          <Styled.CheckListItem key={itemIndex}>{item}</Styled.CheckListItem>
        ))}{' '}
      </Styled.CheckListWrapper>
    );
  });
};

const Styled = {
  CheckListWrapper: styled.ul`
    padding: 0;
  `,

  CheckListItem: styled.span`
  position: relative;
  display: inline-block;
  padding-left: 26px;
  font-size: 12px;
  color: ${colors.white};

  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: url("${icon}") no-repeat;
    left: 0;
  }

  &:not(:first-child) {
    margin-left: 50px;
  }
`,
};

export { CheckList };
