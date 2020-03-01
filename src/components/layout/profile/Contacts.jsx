import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/const';
import '../../../../src/styles/styles.scss';
import avatar from '../../../assets/images/profile/person.png';
import { Button } from '../../../components/elements/buttons/Button';

const Contacts = () => {
  return (
    <Styled.ContactsWrapper>
      <Styled.Wrapper>
        <Styled.Title>Contact Information</Styled.Title>
        <Styled.Avatar>
          <Styled.AvatarWrapper>
            <Styled.AvatarImage src={avatar} />
            <Styled.AvatarButton cleanTopMargin>Upload</Styled.AvatarButton>
          </Styled.AvatarWrapper>
          <Styled.Contact>
              <Styled.ContactRow>
                  <Styled.ContactTitle>Email address</Styled.ContactTitle>
                  <Styled.ContactValue>
                      test@test.com
                  <Styled.ContactEdit>Edit</Styled.ContactEdit>
                  </Styled.ContactValue>
              </Styled.ContactRow>
              <Styled.ContactRow>
                  <Styled.ContactTitle>Phone number</Styled.ContactTitle>
                  <Styled.ContactValue>
                      +380 000000000
                  <Styled.ContactEdit>Edit</Styled.ContactEdit>
                  </Styled.ContactValue>
              </Styled.ContactRow>
          </Styled.Contact>
        </Styled.Avatar>
      </Styled.Wrapper>
    </Styled.ContactsWrapper>
  );
};

const Styled = {
  ContactsWrapper: styled.div`
    
  `,
  Wrapper: styled.div`
    margin-left: 100px;
    margin-right: 100px;
  `,
  Title: styled.h2`
    color: ${colors.white};
    font-size: 24px;
    line-height: 30px;
    font-weight: 400;
  `,
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
    ContactEdit: styled.button`
    background: transparent;
    border: none;
    font-size: 12px;
    line-height: 15px;
    font-weight: 600;
    color: ${colors.orange};
  `,
};

export default Contacts;
