import React from 'react';
import { connect } from 'react-redux';
import compose from 'lodash/flowRight';
import * as yup from 'yup';
import { Form, withFormik } from 'formik';
import { Button } from '../../../components/elements/buttons/Button';
import { actions } from '../../../store/auth/actions';
import Input from '../../../components/form/Input';

const ResetPasswordLayout = ({
  values,
  touched,
  errors,
  handleSubmit,
  handleChange,
  handleBlur,
  error,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        label="Email address"
        placeholder="Please enter your email address"
        value={values.email}
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && (errors.email ? errors.email : error)}
      />
      <Button type="submit">Reset password</Button>
    </Form>
  );
};

const ResetPasswordForm = compose([
  connect(
    ({ auth }) => ({
      auth,
    }),
    {
      resetPassword: actions.resetPassword,
    }
  ),
  withFormik({
    mapPropsToValues: () => ({
      email: '',
    }),
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email()
        .required(),
    }),
    handleSubmit: (values, { setSubmitting, props }) => {
      props.resetPassword(values.email);

      setSubmitting(false);
    },
  }),
])(ResetPasswordLayout);

export { ResetPasswordForm };
