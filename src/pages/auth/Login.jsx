import React from 'react';
import { Link } from '../../components/elements/links/Link';
import FormWrapper from './сomponents/FormWrapper';
import LayoutAuth from '../../components/layout/auth/LayoutAuth';
import { LoginSidebar } from '../../components/layout/auth/LoginSidebar';
import { RouteConfig } from '../../config/routeConfig';
import { LoginForm } from "./forms/LoginForm";

const Login = () => {
  return (
    <LayoutAuth renderLeft={<LoginSidebar />}>
      <FormWrapper>
        <h1 className="title">Sign in</h1>
        <p className="paragraph">
          Do not have the account?{' '}
          <Link to={RouteConfig.register}>Sign up</Link>
        </p>
        <LoginForm />
      </FormWrapper>
    </LayoutAuth>
  );
};

export { Login };
