import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import compose from 'lodash/flowRight';
import * as yup from 'yup';
import { Form, withFormik } from 'formik';
import styled from 'styled-components';
import { InputGroup } from 'react-bootstrap';

import { Button } from '../../../components/elements/buttons/Button';
import Input from '../../../components/form/Input';
import PasswordInput from '../../../components/form/PasswordInput';
import { Checkbox } from '../../../components/form/Checkbox';
import { LinkWhite } from '../../../components/elements/links/Link';
import { RouteConfig } from '../../../config/routeConfig';
import { authActions } from '../../../store/rootActions';
import { useHistory } from 'react-router-dom';

const LoginFormLayout = ({
  values,
  touched,
  errors,
  handleSubmit,
  handleChange,
  handleBlur,
  error,
  auth,
}) => {
  const history = useHistory();

  useEffect(() => {
    if (auth.singIn) {
      history.push(RouteConfig.dashboard);
    }
  }, [auth.singIn]);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        label="Email address"
        placeholder="Please enter your email address"
        value={values.email}
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          (touched.email || auth.error.type === 'email') &&
          (errors.email ? errors.email : error)
        }
      />
      <PasswordInput
        label="Password"
        placeholder="Please enter your password"
        value={values.password}
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          (touched.password || auth.error.type === 'password') &&
          (errors.password ? errors.password : error)
        }
      />
      <InputGroupStyled>
        <Checkbox>Keep me signed in on this computer</Checkbox>
        <LinkWhite to={RouteConfig.forgotPassword}>Forgot Password</LinkWhite>
      </InputGroupStyled>
      <Button type="submit">Sign in</Button>
    </Form>
  );
};

const InputGroupStyled = styled(InputGroup)`
  justify-content: space-between;
`;

const LoginForm = compose([
  connect(
    ({ auth }) => ({
      auth,
    }),
    {
      login: authActions.login,
    }
  ),
  withFormik({
    mapPropsToValues: () => ({
      email: '',
      password: '',
    }),
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email()
        .required(),
      password: yup
        .string()
        .min(8, 'Password should be minimum 8 characters')
        // .matches(
        //   /^[a-z0-9]+$/i,
        //   'Password should be a combination of alphabets and numbers.'
        // )
        .required(),
    }),
    handleSubmit: (values, { setSubmitting, props }) => {
      props.login({
        ...values,
      });

      setSubmitting(false);
    },
  }),
])(LoginFormLayout);

export { LoginForm };
