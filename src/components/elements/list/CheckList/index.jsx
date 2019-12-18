import React from 'react';
import CheckListItem from './CheckListItem';
import { chunk } from 'lodash';

const CheckList = ({ columns = 1, list }) => {
  const chunkedList = chunk(list, columns);

  return chunkedList.map((row, index) => {
    const rowMapped = row.map((item) => (
      <CheckListItem key={index}>{item}</CheckListItem>
    ));

    return <ul>{rowMapped}</ul>;
  });
};

export default CheckList;
