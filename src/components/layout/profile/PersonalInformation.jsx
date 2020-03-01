import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/const';
import '../../../../src/styles/styles.scss';
import avatar from '../../../assets/images/profile/person.png';
import { Button } from '../../../components/elements/buttons/Button';
import Input from '../../form/Input';
import { Dropdown } from '../../form/Dropdown';
import { DatePicker } from '../../form/DatePicker';

const countries = [
    { label: 'Ukraine', value: 'UA', code: '+380' },
    { label: 'UAE', value: 'UAE', code: '+971' },
    { label: 'Singapur', value: 'SG', code: '+65' },
];

const PersonalInformation = () => {
  return (
    <Styled.ContactsWrapper>
      <Styled.Wrapper>
        <Styled.Title>Personal Information</Styled.Title>
        <Styled.Form>
            <Styled.FormWrapper>
                <Styled.FormColumn>
                    <Styled.FormRow>
                        <Input
                            label="Email address"
                            placeholder="Please enter your email address"
                            name="email"
                            stretch
                        />
                    </Styled.FormRow>
                    <Styled.FormRow>
                        {/*<DatePicker*/}
                        {/*    label="Date of birth"*/}
                        {/*    name="birthdate"*/}
                        {/*    // value={values.birthdate}*/}
                        {/*    // dateChange={(value) => setFieldValue('birthdate', value)}*/}
                        {/*/>*/}
                    </Styled.FormRow>
                    <Styled.FormRow>
                        <Dropdown
                            label="Country"
                            name="country"
                            options={countries}
                        />
                        <Input
                            label="ZIP code"
                            placeholder="123123"
                            sm
                        />
                    </Styled.FormRow>
                </Styled.FormColumn>
                <Styled.FormColumn>
                    <Styled.FormRow>
                        <Input
                            label="Region"
                            placeholder="Ivano-Frankivsk Region"
                            stretch
                        />
                    </Styled.FormRow>
                    <Styled.FormRow>
                        <Input
                            label="City"
                            placeholder="Ivano-Frankivsk"
                            stretch
                        />
                    </Styled.FormRow>
                    <Styled.FormRow>
                        <Input
                            label="Street address"
                            placeholder="123 Main Street"
                            stretch
                        />
                    </Styled.FormRow>
                </Styled.FormColumn>
            </Styled.FormWrapper>
            <Button
                type="submit"
            >
                Save
            </Button>
        </Styled.Form>
      </Styled.Wrapper>
    </Styled.ContactsWrapper>
  );
};

const Styled = {
  ContactsWrapper: styled.div`
    padding-top: 40px;
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

export default PersonalInformation;
