import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from '../../../components/elements/links/Link';
import Input from '../../../components/form/Input';
import PhoneInput from '../../../components/form/PhoneInput';
import CheckList from '../../../components/elements/list/CheckList';
import PasswordInput from '../../../components/form/PasswordInput';
import { Dropdown } from '../../../components/form/Dropdown';
import FormWrapper from '../components/FormWrapper';
import { withStepForm } from '../../../components/flows/withStepForm';
import { NextButton } from '../../../components/flows/NextButton';
import { formikProps } from '../../../utils/prop-types';

const CreateFormLayout = () => {
  const passwordCheckArray = [
    'At least 8 symbols',
    'At least 1 UPPERCASE letter',
    'At least 1 number',
    'At least 1 special character',
  ];

  return (
    <FormWrapper>
      <a className="home-button" href="/" />
      <h1 className="title">Create an account</h1>
      <p className="paragraph">
        Already have an account? <Link href="#">Log in</Link>
      </p>
      <Form>
        <Input
          label="Email address"
          placeholder="Please enter your email address"
        />
        <PasswordInput
          label="Password"
          placeholder="Please enter your password"
        />
        <CheckList columns={2} list={passwordCheckArray} />
        <PasswordInput
          label="Confirm password"
          placeholder="Confirm password"
        />
        <Dropdown />
        <PhoneInput
          label="Phone number"
          countryCode="+380"
          placeholder="Number"
        />

        <p className="paragraph">
          The security code will be sent to the number filled above
        </p>
        <NextButton text="Continue" />
      </Form>
    </FormWrapper>
  );
};

CreateFormLayout.propTypes = {
  ...formikProps,
};

export const CreateForm = withStepForm(CreateFormLayout);
