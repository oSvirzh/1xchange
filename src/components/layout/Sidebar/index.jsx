import React from 'react';
import logo from '../../../assets/images/logo.svg';
import styled from 'styled-components';
import Name from './Name';
import Steps from './Steps';
import Number from './Number';
import Item from './Item';

const Sidebar = styled.div`
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

Sidebar.Item = Item;
Sidebar.Steps = Steps;
Sidebar.Number = Number;
Sidebar.Name = Name;

const SidebarCmp = () => {
  return (
    <Sidebar>
      <img src={logo} alt="1xchange logo" />
      <Sidebar.Steps>
        <Sidebar.Item>
          <Sidebar.Number number="1" modifiers="active" />
          <Sidebar.Name>Create an acсount</Sidebar.Name>
        </Sidebar.Item>
        <Sidebar.Item>
          <Sidebar.Number number="2" />
          <Sidebar.Name>Profile information</Sidebar.Name>
        </Sidebar.Item>
        <Sidebar.Item>
          <Sidebar.Number number="3" />
          <Sidebar.Name>ID Identification</Sidebar.Name>
        </Sidebar.Item>
      </Sidebar.Steps>
    </Sidebar>
  );
};

export { SidebarCmp, Sidebar };
