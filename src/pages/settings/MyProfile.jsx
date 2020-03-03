import React from 'react';
import avatar from '../../assets/images/profile/person.png';
import Title from '../../components/elements/typography/Title';
import styled from 'styled-components';
import { Button } from '../../components/elements/buttons/Button';
import { colors } from '../../styles/const';
import Input from '../../components/form/Input';
import { Dropdown } from '../../components/form/Dropdown';
import Holder from '../../components/form/Holder';
import PasswordInput from '../../components/form/PasswordInput';
import { PersonalInformationForm } from './forms/PersonalInformationForm';
// import LabelInput from "../../components/form/LabelInput";

const countries = [
  { label: 'Ukraine', value: 'UA', code: '+380' },
  { label: 'UAE', value: 'UAE', code: '+971' },
  { label: 'Singapur', value: 'SG', code: '+65' },
];

const MyProfile = () => {
  return (
    <>
      <Title>Contact Information</Title>
      <Styled.Avatar>
        <Styled.AvatarWrapper>
          <Styled.AvatarImage src={avatar} />
          <Styled.AvatarButton cleanTopMargin>Upload</Styled.AvatarButton>
        </Styled.AvatarWrapper>
        <Styled.Contact>
          {/*<LabelInput>Hello</LabelInput>*/}
          <Styled.ContactRow>
            <Holder label="Email address">test@test.com</Holder>
          </Styled.ContactRow>
          <Styled.ContactRow>
            <Holder label="Phone number">+380 000000000</Holder>
          </Styled.ContactRow>
        </Styled.Contact>
      </Styled.Avatar>
      <Title>Personal Information</Title>
      <PersonalInformationForm />
    </>
  );
};

const Styled = {
  Avatar: styled.div`
    display: flex;
    margin-top: 10px;
    max-width: 460px;
    width: 100%;
  `,
  AvatarWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  AvatarImage: styled.img`
    width: 90px;
    height: 90px;
  `,
  AvatarButton: styled(Button)`
    margin-top: 10px;
    background-image: none;
    padding: 12px 30px;
    border: 2px solid ${colors.orange};
    border-radius: 4px;
    :not(:first-child) {
      margin-left: 0;
    }
  `,
  Contact: styled.div`
    margin-left: 24px;
    width: 100%;
  `,
  ContactRow: styled.div`
    :not(:first-child) {
      margin-top: 20px;
    }
  `,
  ContactTitle: styled.p`
    color: ${colors.white};
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 10px;
  `,
  ContactValue: styled.p`
    display: flex;
    justify-content: space-between;
    color: ${colors.white};
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
  `,
  Form: styled.form`
    margin-top: 10px;
  `,
  FormWrapper: styled.form`
    display: flex;
  `,
  FormColumn: styled.div`
    max-width: 460px;
    width: 100%;

    :not(:last-child) {
      margin-right: 40px;
    }
  `,
  FormRow: styled.div`
    display: flex;
  `,
};

export { MyProfile };
