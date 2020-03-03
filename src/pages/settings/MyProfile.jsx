import React from 'react';
import avatar from '../../assets/images/profile/person.png';
import Title from '../../components/elements/typography/Title';
import styled from 'styled-components';
import { Button } from '../../components/elements/buttons/Button';
import { colors } from '../../styles/const';
import Holder from '../../components/form/Holder';
import { PersonalInformationForm } from './forms/PersonalInformationForm';
import { connect } from 'react-redux';

const countries = [
  { label: 'Ukraine', value: 'UA', code: '+380' },
  { label: 'UAE', value: 'UAE', code: '+971' },
  { label: 'Singapur', value: 'SG', code: '+65' },
];

const MyProfileLayout = ({user}) => {
  const {email, phone_number} = user;
  return (
    <>
      <Title>Contact Information</Title>
      <Styled.Avatar>
        <Styled.AvatarWrapper>
          <Styled.AvatarImage src={avatar} />
          <Styled.AvatarButton cleanTopMargin>Upload</Styled.AvatarButton>
        </Styled.AvatarWrapper>
        <Styled.Contact>
          <Styled.ContactRow>
            <Holder label="Email address">{email}</Holder>
          </Styled.ContactRow>
          <Styled.ContactRow>
            <Holder label="Phone number">{phone_number}</Holder>
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

export const MyProfile = connect(({ auth }) => ({
  user: auth.user,
}))(MyProfileLayout);
