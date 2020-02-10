import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import compose from 'lodash/flowRight';
import * as yup from 'yup';
import { Form, withFormik } from 'formik';
import { findIndex } from 'lodash';
import { useHistory } from 'react-router-dom';

import Input from '../../../components/form/Input';
import PhoneInput from '../../../components/form/PhoneInput';
import { CheckList } from '../../../components/elements/list/CheckList';
import PasswordInput from '../../../components/form/PasswordInput';
import { Dropdown } from '../../../components/form/Dropdown';
import { Button } from '../../../components/elements/buttons/Button';
import { Checkbox } from '../../../components/form/Checkbox';
import { Link } from '../../../components/elements/links/Link';
import ModalWindow from '../../../components/elements/modal/ModalWindow';
import { RouteConfig } from '../../../config/routeConfig';
import { authActions } from "../../../store/rootActions";

const CreateAccountFormComponent = ({
  values,
  touched,
  errors,
  handleSubmit,
  handleChange,
  handleBlur,
  isLoading,
  isSubmitting,
  error,
  auth,
  setErrors,
  setFieldValue,
}) => {
  const history = useHistory();

  const passwordCheckArray = [
    'At least 8 symbols',
    'At least 1 UPPERCASE letter',
    'At least 1 number',
    'At least 1 special character',
  ];

  const countries = [
    { label: 'Ukraine', value: 'UA', code: '+380' },
    { label: 'UAE', value: 'UAE', code: '+971' },
    { label: 'Singapur', value: 'SG', code: '+65' },
  ];

  const getCurrentCountryCode = (value) => {
    const currentCountry = findIndex(countries, { value });
    return currentCountry !== -1 ? countries[currentCountry].code : '';
  };

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (auth.error) setErrors({ [auth.error.type]: auth.error.message });
  }, [auth.error]);

  useEffect(() => {
    if (auth.isRegister) {
      history.push(RouteConfig.verifyMobile);
    }
  }, [auth.isRegister]);

  return (
    <>
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
        <Dropdown
          label="Country"
          name="country"
          options={countries}
          value={values.country}
          setFieldValue={setFieldValue}
        />
        <PhoneInput
          label="Phone number"
          countryCode={getCurrentCountryCode(values.country.value) || '+380'}
          placeholder="Number"
          value={values.phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.phoneNumber &&
            (errors.phoneNumber ? errors.phoneNumber : error)
          }
        />
        <p className="paragraph">
          The security code will be sent to the number filled above
        </p>
        <Checkbox
          value={values.consent}
          setFieldValue={setFieldValue}
          name="consent"
          error={errors.consent}
        >
          I accept 1xchange&#39;s{' '}
          <Link as="span" onClick={() => setShowModal(true)}>
            Terms of Use
          </Link>{' '}
          and
          <Link as="span" onClick={() => setShowModal(true)}>
            {' '}
            Privacy policy
          </Link>
        </Checkbox>
        <Button
          type="submit"
          loading={isLoading}
          disabled={isSubmitting || isLoading}
        >
          Continue
        </Button>
        <ModalWindow
          isShowed={showModal}
          onAgree={() => {
            setFieldValue('consent', true);
          }}
        />
      </Form>
    </>
  );
};

const CreateAccountForm = compose([
  connect(
    ({ auth }) => ({
      auth,
    }),
    { registerAction: authActions.register }
  ),
  withFormik({
    mapPropsToValues: () => ({
      email: '',
      password: '',
      confirmPassword: '',
      country: { label: 'Choose country', value: '' },
      phoneNumber: '',
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
      confirmPassword: yup
        .string()
        .required('Confirm password is a required field')
        .test('match-password', 'Should match Password', function(value) {
          return value === this.parent.password;
        }),
      country: yup.object().required(),
      phoneNumber: yup.string().required('Phone number is a required field'),
      consent: yup
        .bool()
        .test(
          'consent',
          'You have to agree with our Terms and Conditions!',
          (value) => value === true
        )
        .required('You have to agree with our Terms and Conditions!'),
    }),
    handleSubmit: (values, { setSubmitting, props }) => {
      props.registerAction(values);
      setSubmitting(false);
    },
  }),
])(CreateAccountFormComponent);

export { CreateAccountForm };
