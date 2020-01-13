import React from 'react';
import { RouteConfig } from '../../../config/routeConfig';
import { Link } from '../../../components/elements/links/Link';
import FormWrapper from '../сomponents/FormWrapper';
import { CreateAccountForm } from '../forms/CreateAccountForm';

export const CreateAccount = () => {
  return (
    <FormWrapper>
      <a className="home-button" href="/" />
      <h1 className="title">Create an account</h1>
      <p className="paragraph">
        Already have an account? <Link to={RouteConfig.login}>Log in</Link>
      </p>
      <CreateAccountForm />
    </FormWrapper>
  );
};
