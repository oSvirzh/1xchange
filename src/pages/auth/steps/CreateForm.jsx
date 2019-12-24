import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from '../../../components/elements/links/Link';
import Input from '../../../components/form/Input';
import PhoneInput from '../../../components/form/PhoneInput';
import CheckList from '../../../components/elements/list/CheckList';
import PasswordInput from '../../../components/form/PasswordInput';
import { Dropdown } from '../../../components/form/Dropdown';
import FormWrapper from '../сomponents/FormWrapper';
import { Button } from '../../../components/elements/buttons/Button';

import { RouteConfig } from '../../../config/routeConfig';

export const CreateForm = () => {
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
        Already have an account? <Link to={RouteConfig.login}>Log in</Link>
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
        <Button to={RouteConfig.verifyEmail}>Continue</Button>
      </Form>
    </FormWrapper>
  );
};
