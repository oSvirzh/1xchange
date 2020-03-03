import React from 'react';
import { connect } from 'react-redux';
import compose from 'lodash/flowRight';
import * as yup from 'yup';
import { Form, withFormik } from 'formik';
import { Button } from '../../../components/elements/buttons/Button';
import PasswordInput from '../../../components/form/PasswordInput';
import { CheckList } from '../../../components/elements/list/CheckList';
import { authActions } from '../../../store/rootActions';

const ChangePasswordLayout = ({
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
      <PasswordInput
        label="Current password"
        placeholder="Please enter your current password"
        value={values.oldPassword}
        name="oldPassword"
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          (touched.oldPassword || auth.error.type === 'oldPassword') &&
          (errors.oldPassword ? errors.oldPassword : error)
        }
      />
      <PasswordInput
        label="Password"
        placeholder="Please enter your new password"
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

const ChangePassworForm = compose([
  connect(
    ({ auth }) => ({
      auth,
    }),
    {
      changeUserPassword: authActions.changeUserPassword,
    }
  ),
  withFormik({
    mapPropsToValues: () => ({
      oldPassword: '',
      password: '',
      confirmPassword: '',
    }),
    validationSchema: yup.object().shape({
      code: yup.string().required(),
      oldPassword: yup
        .string()
        .min(8, 'Password should be minimum 8 characters')
        // .matches(
        //   /^[a-z0-9]+$/i,
        //   'Password should be a combination of alphabets and numbers.'
        // )
        .required(),
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
      props.changeUserPassword({
        oldPassword: values.oldPassword,
        newPassword: values.password,
      });

      setSubmitting(false);
    },
  }),
])(ChangePasswordLayout);

export { ChangePassworForm };
