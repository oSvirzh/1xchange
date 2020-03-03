import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import compose from 'lodash/flowRight';
import * as yup from 'yup';
import { Form, withFormik } from 'formik';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Input from '../../../components/form/Input';
import { Button } from '../../../components/elements/buttons/Button';
import { DatePicker } from '../../../components/form/DatePicker';
import { colors } from '../../../styles/const';
import { RouteConfig } from '../../../config/routeConfig';
import { authActions } from '../../../store/rootActions';
import { Dropdown } from '../../../components/form/Dropdown';
import { countriesList } from '../../../config/listOfCountries';

const countries = countriesList;

const PersonalInformationFormLayout = ({
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

  useEffect(() => {
    if (auth.error) setErrors({ [auth.error.type]: auth.error });
  }, [auth.error]);

  useEffect(() => {
    if (auth.isDataUpdated) {
      history.push(RouteConfig.dashboard);
    }
  }, [auth.isDataUpdated]);

  return (
    <Form onSubmit={handleSubmit}>
      <Styled.FormWrapper>
        <Styled.FormColumn>
          <Styled.FormRow>
            <Input
              stretch
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
          </Styled.FormRow>
          <Styled.FormRow>
            <DatePicker
              stretch
              label="Date of birth"
              name="birthdate"
              value={values.birthdate}
              dateChange={(value) => setFieldValue('birthdate', value)}
              error={errors.birthdate ? errors.birthdate : error}
            />
          </Styled.FormRow>
          <Styled.FormRow>
            <Dropdown
              stretch
              label="Country"
              name="country"
              options={countries}
              value={values.country}
              setFieldValue={setFieldValue}
            />
            <Input
              sm
              label="ZIP Code"
              placeholder="Please enter your ZIP Code"
              value={values.zipCode}
              name="zipCode"
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.zipCode && (errors.zipCode ? errors.zipCode : error)
              }
            />
          </Styled.FormRow>
        </Styled.FormColumn>
        <Styled.FormColumn>
          <Styled.FormRow>
            <Input
              stretch
              label="Region"
              placeholder="Please enter your Region"
              value={values.region}
              name="region"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.region && (errors.region ? errors.region : error)}
            />
          </Styled.FormRow>
          <Styled.FormRow>
            <Input
              stretch
              label="City"
              placeholder="Please enter your City"
              value={values.city}
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.city && (errors.city ? errors.city : error)}
            />
          </Styled.FormRow>
          <Styled.FormRow>
            <Input
              stretch
              label="Street address"
              placeholder="Please enter your Street address"
              value={values.address}
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.address && (errors.address ? errors.address : error)
              }
            />
          </Styled.FormRow>
        </Styled.FormColumn>
      </Styled.FormWrapper>
      <Button
        type="submit"
        loading={isLoading}
        disabled={isSubmitting || isLoading}
      >
        Continue
      </Button>
    </Form>
  );
};

const PersonalInformationForm = compose([
  connect(
    ({ auth }) => ({
      auth,
      user: auth.user,
    }),
    {
      updateUserAttributes: authActions.updateUserAttributes,
    }
  ),
  withFormik({
    mapPropsToValues: ({ user }) => ({
      fullName: user['custom:fullName'] || '',
      birthdate: user['custom:birthdate'] || '',
      zipCode: user['custom:zipCode'] || '',
      region: user['custom:region'] || '',
      city: user['custom:city'] || '',
      address: user['custom:address'] || '',
      country: JSON.parse(user['custom:country']) || {
        label: 'Choose country',
        value: '',
      },
    }),
    validationSchema: yup.object().shape({
      fullName: yup.string(),
      birthdate: yup.string(),
      zipCode: yup.string(),
      region: yup.string(),
      city: yup.string(),
      address: yup.string(),
      country: yup.object(),
    }),
    handleSubmit: (values, { setSubmitting, props }) => {
      props.updateUserAttributes(values);
      setSubmitting(false);
    },
  }),
])(PersonalInformationFormLayout);

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
  Form: styled.form`
    margin-top: 10px;
  `,
  FormWrapper: styled.div`
    display: flex;
  `,
  FormColumn: styled.div`
    max-width: 460px;
    width: 100%;

    :not(:last-child) {
      margin-right: 40px;
    }
  `,
  FormRow: styled.div`
    display: flex;
  `,
};

export { PersonalInformationForm };
