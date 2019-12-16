import React from 'react';
import logo from '../../images/logo.svg';
import styled from 'styled-components';
import { colors } from '../../styles/const';

const SidebarStyled = styled.div`
  background: linear-gradient(
    325.95deg,
    #101728 -143.03%,
    #11192b -3.81%,
    #15213d 58.69%,
    #0c1834 131.65%
  );
  max-width: 500px;
  width: 100%;
  padding: 40px;
`;

const Steps = styled.ul`
  padding-left: 64px;
  margin-top: 124px;
`;

const stepNumberStyle = {
  default: {
    color: '#1d1d29',
  },
  active: {
    border: `1px solid ${colors.orange}`,
    color: colors.white,
  },
};

const StepNumber = styled.span`
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.active ? stepNumberStyle.active : stepNumberStyle.default}

  &::before {
    content: '';
    position: absolute;
    width: 1px;
    height: 54px;
    background-color: ${colors.white};
    opacity: 0.2;
    bottom: -60px;
  }

  &::after {
    content: '${(props) => props.number}';
    position: absolute;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.active ? colors.yellow : 'rgba(255, 255, 255, 0.3)'};
    opacity: ${(props) => (props.active ? '1' : '0.5')};
    display: flex;
    align-items: center;
    justify-content: center;
     ${(props) => props.active && `box-shadow: 0 4px 20px ${colors.yellow}`}};
  }
`;

const stepNameStyle = {
  active: {
    color: '#fff',
    opacity: '1',
    ':after': {
      'background-color': colors.orange,
      opacity: 1,
    },
  },
};

const StepsName = styled.span`
  color: #c4c4c4;
  position: relative;
  padding-left: 17px;
  margin-left: 14px;
  opacity: 0.6;
  font-weight: 400;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 7px;
    height: 7px;
    background-color: ${colors.white};
    opacity: 0.5;
    left: 0;
    border-radius: 50%;
  }

  ${(props) => props.active && stepNameStyle.active}
`;

const StepsItem = styled.li`
  display: flex;
  align-items: center;

  font-weight: 800;
  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 64px;
  }

  &:last-child ${StepNumber}:before {
    content: none;
  }
`;

const Sidebar = () => {
  return (
    <SidebarStyled>
      <img src={logo} alt="1xchange logo" />
      <Steps>
        <StepsItem>
          <StepNumber number="1" active />
          <StepsName>Create an acсount</StepsName>
        </StepsItem>
        <StepsItem>
          <StepNumber number="2" />
          <StepsName>Profile information</StepsName>
        </StepsItem>
        <StepsItem>
          <StepNumber number="3" />
          <StepsName>ID Identification</StepsName>
        </StepsItem>
      </Steps>
    </SidebarStyled>
  );
};

export { Sidebar };
