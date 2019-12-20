import React from 'react';
import CheckListItem from './CheckListItem';
import { chunk } from 'lodash';

const CheckList = ({ columns = 1, list }) => {
  const chunkedList = chunk(list, columns);

  return chunkedList.map((row, index) => {
    return (
      <ul key={index}>
        {row.map((item, itemIndex) => (
          <CheckListItem key={itemIndex}>{item}</CheckListItem>
        ))}{' '}
      </ul>
    );
  });
};

export default CheckList;
