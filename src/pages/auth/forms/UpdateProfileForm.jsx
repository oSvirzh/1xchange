import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import compose from 'lodash/flowRight';
import { get } from 'lodash';
import * as yup from 'yup';
import { Form, withFormik } from 'formik';
import styled from 'styled-components';
import Input from '../../../components/form/Input';
import { Button } from '../../../components/elements/buttons/Button';
import { actions } from '../../../store/auth/actions';
import { DatePicker } from '../../../components/form/DatePicker';
import { colors } from '../../../styles/const';

const UpdateProfileFormComponent = ({
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
  login,
}) => {
  useEffect(() => {
    // login({
    //   email: 'alexserzhov@gmail.com',
    //   password: 'Dniwe123.',
    //   nonLogin: true,
    // });
  }, []);

  useEffect(() => {
    if (auth.error) setErrors({ [auth.error.type]: auth.error });
  }, [auth.error]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          label="Full name"
          placeholder="Please enter your full name"
          value={values.fullName}
          name="fullName"
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.fullName && (errors.fullName ? errors.fullName : error)
          }
        />
        <DatePicker
          label="Date of birth"
          name="birthdate"
          value={values.birthdate}
          dateChange={(value) => setFieldValue('birthdate', value)}
          error={
            auth.error.birthdate === 'birthdate' &&
            (errors.birthdate ? errors.birthdate : error)
          }
        />
        <Styled.Code>
          <Input
            label="ZIP Code"
            placeholder="Please enter your ZIP Code"
            value={values.zipCode}
            name="zipCode"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.zipCode && (errors.zipCode ? errors.zipCode : error)}
          />
          <Styled.Country>
            Country <strong>{get(auth, 'user.country.label', '')}</strong>
          </Styled.Country>
        </Styled.Code>
        <Input
          label="Region"
          placeholder="Please enter your Region"
          value={values.region}
          name="region"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.region && (errors.region ? errors.region : error)}
        />
        <Input
          label="City"
          placeholder="Please enter your City"
          value={values.city}
          name="city"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.city && (errors.city ? errors.city : error)}
        />
        <Input
          label="Street address"
          placeholder="Please enter your Street address"
          value={values.address}
          name="address"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.address && (errors.address ? errors.address : error)}
        />
        <Button
          type="submit"
          loading={isLoading}
          disabled={isSubmitting || isLoading}
        >
          Continue
        </Button>
      </Form>
    </>
  );
};

const UpdateProfileForm = compose([
  connect(
    ({ auth }) => ({
      auth,
    }),
    { updateUserAttributes: actions.updateUserAttributes, login: actions.login }
  ),
  withFormik({
    mapPropsToValues: () => ({
      fullName: '',
      birthdate: '',
      zipCode: '',
      region: '',
      city: '',
      address: '',
    }),
    validationSchema: yup.object().shape({
      fullName: yup.string().required(),
      birthdate: yup.string().required(),
      zipCode: yup.string().required(),
      region: yup.string().required(),
      city: yup.string().required(),
      address: yup.string().required(),
    }),
    handleSubmit: (values, { setSubmitting, props }) => {
      props.updateUserAttributes(values);
      setSubmitting(false);
    },
  }),
])(UpdateProfileFormComponent);

const Styled = {
  Code: styled.div`
    display: flex;
  `,
  Country: styled.div`
    max-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    margin-top: 10px;
    font-size: 14px;
    line-height: 18px;
    color: ${colors.white};
  `,
  CountryName: styled.div``,
};

export { UpdateProfileForm };
