import React from 'react';
import { connect } from 'react-redux';
import compose from 'lodash/flowRight';
import * as yup from 'yup';
import { Form, withFormik } from 'formik';
import { Button } from '../../../components/elements/buttons/Button';
import { authActions } from '../../../store/rootActions';
import { Dropdown } from '../../../components/form/Dropdown';

const localCurrencyList = [
  { label: 'Ukraine', value: 'UA', code: '+380' },
  { label: 'UAE', value: 'UAE', code: '+971' },
  { label: 'Singapur', value: 'SG', code: '+65' },
];

const timezonesList = [
  { label: 'Ukraine', value: 'UA', code: '+380' },
  { label: 'UAE', value: 'UAE', code: '+971' },
  { label: 'Singapur', value: 'SG', code: '+65' },
];

const PreferencesFormLayout = ({ values, handleSubmit, setFieldValue }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Dropdown
        label="Local currency"
        name="country"
        options={localCurrencyList}
        value={values.localCurrency}
        setFieldValue={setFieldValue}
      />
      <Dropdown
        label="Timezone"
        name="country"
        options={timezonesList}
        value={values.timezone}
        setFieldValue={setFieldValue}
      />
      <Button type="submit">Save</Button>
    </Form>
  );
};

const PreferencesForm = compose([
  connect(
    ({ auth }) => ({
      auth,
    }),
    {
      updateUserAttributes: authActions.updateUserAttributes,
    }
  ),
  withFormik({
    mapPropsToValues: () => ({
      localCurrency: { label: 'Choose Local Currency', value: '' },
      timezone: { label: 'Choose Timezone', value: '' },
    }),
    validationSchema: yup.object().shape({
      localCurrency: yup.string(),
      timezone: yup.string(),
    }),
    handleSubmit: (values, { setSubmitting, props }) => {
      props.updateUserAttributes({
        values,
      });

      setSubmitting(false);
    },
  }),
])(PreferencesFormLayout);

export { PreferencesForm };
