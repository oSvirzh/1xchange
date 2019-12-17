import React from 'react';
import CheckListItem from './CheckListItem';
import chunk from 'lodash';

const CheckList = ({ columns = 1, list }) => {
  const chunkedList = chunk(list, columns);

  return chunkedList.map((row) => {
    const rowMapped = row.map((item) => <CheckListItem>{item}</CheckListItem>);

    return <div>{rowMapped}</div>;
  });
};

export default CheckList;
