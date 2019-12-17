import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from '../../components/elements/links/Link';
import Input from '../../components/form/Input';
import PhoneInput from '../../components/form/PhoneInput';
import { Button } from '../../components/elements/buttons/Button';
import AuthPage from './AuthPage';

const Registration = () => {
  return (
    <AuthPage activeStep="1">
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
        <Input label="Password" placeholder="Please enter your password" />
        <Input label="Confirm password" placeholder="Confirm password" />

        <PhoneInput
          label="Phone number"
          countryCode="+380"
          placeholder="Number"
        />

        <p className="paragraph">
          The security code will be sent to the number filled above
        </p>
        <Button>Continue</Button>
      </Form>
    </AuthPage>
  );
};

export default Registration;
