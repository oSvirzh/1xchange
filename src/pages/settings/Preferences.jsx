import React from 'react';
import Title from '../../components/elements/typography/Title';
import { Dropdown } from '../../components/form/Dropdown';
import styled from 'styled-components';
import { Button } from '../../components/elements/buttons/Button';
import { Checkbox } from '../../components/form/Checkbox';
import { NotificationsForm } from './forms/NotificationsForm';
import { PreferencesForm } from './forms/PreferencesForm';

const countries = [
  { label: 'Ukraine', value: 'UA', code: '+380' },
  { label: 'UAE', value: 'UAE', code: '+971' },
  { label: 'Singapur', value: 'SG', code: '+65' },
];

const Preferences = () => {
  return (
    <Styled.Container>
      <Title>Contact Information</Title>
      <PreferencesForm />
      <Title>Notifications</Title>
      <NotificationsForm />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    max-width: 280px;
  `,
  CheckboxWrapper: styled.div`
    margin-top: 20px;
  `,
};

export { Preferences };
