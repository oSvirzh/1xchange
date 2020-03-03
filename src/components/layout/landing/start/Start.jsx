import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../styles/const';
import { Button } from '../../../elements/buttons/Button';
import { RouteConfig } from '../../../../config/routeConfig';

const Start = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>Start trading on Finxflo today</Styled.Title>
      <Button to={RouteConfig.register}>Get started</Button>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 110px;
    position: relative;
    background-color: ${colors.lightblue};
  `,
  Title: styled.h2`
    text-align: center;
    color: ${colors.white};
    font-weight: normal;
  `,
};

export default Start;
