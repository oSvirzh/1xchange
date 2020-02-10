import React from 'react';
import { connect } from 'react-redux';
import compose from 'lodash/flowRight';
import * as yup from 'yup';
import { Form, withFormik } from 'formik';
import { Button } from '../../../components/elements/buttons/Button';
import { actions } from '../../../store/auth/actions';
import PasswordInput from '../../../components/form/PasswordInput';
import { CheckList } from '../../../components/elements/list/CheckList';
import CodeInput from '../../../components/form/CodeInput';
import { authActions } from "../../../store/rootActions";

const EnterNewPasswordFormLayout = ({
  values,
  touched,
  errors,
  handleSubmit,
  handleChange,
  handleBlur,
  error,
  auth,
}) => {
  const passwordCheckArray = [
    'At least 8 symbols',
    'At least 1 UPPERCASE letter',
    'At least 1 number',
    'At least 1 special character',
  ];
  return (
    <Form onSubmit={handleSubmit}>
      <CodeInput
        label="Authentication code"
        placeholder="0000000"
        value={values.code}
        name="code"
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          (touched.code || auth.error.type === 'code') &&
          (errors.code ? errors.code : error)
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
      <CheckList columns={2} list={passwordCheckArray} />
      <PasswordInput
        label="Confirm password"
        placeholder="Confirm password"
        value={values.confirmPassword}
        name="confirmPassword"
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched.confirmPassword &&
          (errors.confirmPassword ? errors.confirmPassword : error)
        }
      />
      <Button type="submit">Reset password</Button>
    </Form>
  );
};

const EnterNewPasswordForm = compose([
  connect(
    ({ auth }) => ({
      auth,
    }),
    {
      resetPasswordSubmit: authActions.resetPasswordSubmit,
    }
  ),
  withFormik({
    mapPropsToValues: () => ({
      code: '',
      password: '',
      confirmPassword: '',
    }),
    validationSchema: yup.object().shape({
      code: yup.string().required(),
      password: yup
        .string()
        .min(8, 'Password should be minimum 8 characters')
        // .matches(
        //   /^[a-z0-9]+$/i,
        //   'Password should be a combination of alphabets and numbers.'
        // )
        .required(),
      confirmPassword: yup
        .string()
        .required('Confirm password is a required field')
        .test('match-password', 'Should match Password', function(value) {
          return value === this.parent.password;
        }),
    }),
    handleSubmit: (values, { setSubmitting, props }) => {
      props.resetPasswordSubmit({
        ...values,
        username: props.auth.passwordReset,
      });

      setSubmitting(false);
    },
  }),
])(EnterNewPasswordFormLayout);

export { EnterNewPasswordForm };
