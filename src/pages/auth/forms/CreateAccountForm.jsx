import React from 'react';
import { Form } from 'react-bootstrap';
import * as yup from 'yup';
import { withFormik } from 'formik';

import Input from '../../../components/form/Input';
import PhoneInput from '../../../components/form/PhoneInput';
import CheckList from '../../../components/elements/list/CheckList';
import PasswordInput from '../../../components/form/PasswordInput';
import { Dropdown } from '../../../components/form/Dropdown';
import { Button } from '../../../components/elements/buttons/Button';

const CreateAccountFormComponent = ({
  className,
  values,
  touched,
  errors,
  isValid,
  handleSubmit,
  handleChange,
  handleBlur,
  isLoading,
  isSubmitting,
  error,
}) => {
  const passwordCheckArray = [
    'At least 8 symbols',
    'At least 1 UPPERCASE letter',
    'At least 1 number',
    'At least 1 special character',
  ];

  const countries = [
    { label: 'Ukraine', value: 'UA' },
    { label: 'UAE', value: 'UAE' },
    { label: 'Singapur', value: 'SG' },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Email address"
        placeholder="Please enter your email address"
        value={values.email}
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && (errors.email ? errors.email : error)}
      />
      <PasswordInput
        label="Password"
        placeholder="Please enter your password"
        value={values.password}
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && (errors.password ? errors.password : error)}
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
      <Dropdown label="Country" options={countries} value={countries[0]} />
      <PhoneInput
        label="Phone number"
        countryCode="+380"
        placeholder="Number"
        value={values.number}
        name="number"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.number && (errors.number ? errors.number : error)}
      />
      <p className="paragraph">
        The security code will be sent to the number filled above
      </p>
      <Button
        type="submit"
        loading={isLoading}
        disabled={isSubmitting || isLoading}
      >
        Continue
      </Button>
    </form>
  );
};

const CreateAccountForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
    confirmPassword: '',
    //country = '',
    number: '',
  }),
  validationSchema: yup.object().shape({
    email: yup.string().required(),
    password: yup
      .string()
      .min(8, 'Password should be minimum 8 characters')
      .matches(
        /^[a-z0-9]+$/i,
        'Password should be a combination of alphabets and numbers.'
      )
      .required(),
    confirmPassword: yup
      .string()
      .required()
      .test('match-password', 'Should match Password', function(value) {
        return value === this.parent.password;
      }),
    number: yup.string().required(),
  }),
  handleSubmit: (values) => {
    console.log('Submit');
  },
})(CreateAccountFormComponent);

export { CreateAccountForm };
