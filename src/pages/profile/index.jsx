import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/layout/profile/Menu';
import Contacts from '../../components/layout/profile/Contacts';
import PersonalInformation from '../../components/layout/profile/PersonalInformation';
import { colors } from '../../styles/const';

const SettingsProfile = () => {
  return (
      <Styled.Profile>
          <Menu />
          <Styled.MainInfo>
              <Contacts />
              <PersonalInformation />
          </Styled.MainInfo>
      </Styled.Profile>
  );
};

const Styled = {
  Profile: styled.div`
    height: 100vh;
  `,
  MainInfo: styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    background: ${colors.lightblue};
  `,
};

export default SettingsProfile;
