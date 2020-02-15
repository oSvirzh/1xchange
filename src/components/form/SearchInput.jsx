import React from 'react';
import { InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../styles/const';
import searchIcon from '../../assets/images/dashboard/search.svg';

const SearchInput = () => {
  return (
    <Styled.InputGroup>
      <Styled.Input placeholder="Fill currency type" />
      <Styled.SearchIcon />
    </Styled.InputGroup>
  );
};

const Styled = {
  InputGroup: styled(InputGroup)`
    position: relative;
  `,
  SearchIcon: styled.span`
    position: absolute;
    right: 20px;
    background-image: url("${searchIcon}");
    top: 50%;
    transform: translateY(-50%);
    color: ${colors.orange};
    width: 16px;
    height: 16px;
  `,
  Input: styled.input`
    font-size: 16px;
    line-height: 20px;
    padding: 17px 20px;
    width: 100%;
    color: ${colors.blue};
    background: ${colors.white};
    border: 0.5px solid ${colors.gray};
    border-radius: 3px;
  `,
};

export default SearchInput;
