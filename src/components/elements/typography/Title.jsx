import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/const';
import '../../../styles/styles.scss';

const Title = ({ children }) => {
  return <Styled.Title>{children}</Styled.Title>;
};

const Styled = {
  Title: styled.h2`
    color: ${colors.white};
    font-size: 24px;
    line-height: 30px;
    font-weight: 400;
    margin-top: 40px;
  `,
};

export default Title;
