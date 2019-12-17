import React from 'react';
import CheckListItem from './CheckListItem';
import { chunk } from 'lodash';

const CheckList = ({ columns = 1, list }) => {
  const chunkedList = chunk(list, columns);

  console.log('chunkedList', chunkedList);

  return chunkedList.map((row) => {
    const rowMapped = row.map((item) => <CheckListItem>{item}</CheckListItem>);

    return <ul>{rowMapped}</ul>;
  });
};

export default CheckList;
