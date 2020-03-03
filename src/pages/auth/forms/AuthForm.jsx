import React from 'react';
import { connect } from 'react-redux';
import compose from 'lodash/flowRight';
import * as yup from 'yup';
import { Form, withFormik } from 'formik';
import { Button } from '../../../components/elements/buttons/Button';
import CodeInput from '../../../components/form/CodeInput';
import { ButtonTransparent } from '../../../components/elements/buttons/ButtonTransparent';

const AuthFormLayout = ({
  values,
  touched,
  errors,
  handleSubmit,
  handleChange,
  handleBlur,
  error,
  auth,
  resend,
}) => {
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
      {resend && (
        <ButtonTransparent onClick={() => resend(auth.register.user.username)}>
          Send code again
        </ButtonTransparent>
      )}
      <Button type="submit">Continue</Button>
    </Form>
  );
};

const AuthForm = compose([
  connect(({ auth }) => ({
    auth,
  })),
  withFormik({
    mapPropsToValues: () => ({
      code: '',
    }),
    validationSchema: yup.object().shape({
      code: yup.string().required(),
    }),
    handleSubmit: (values, { setSubmitting, props }) => {
      props.confirm({
        ...values,
        username: props.auth.register.user.username,
      });

      setSubmitting(false);
    },
  }),
])(AuthFormLayout);

export { AuthForm };
