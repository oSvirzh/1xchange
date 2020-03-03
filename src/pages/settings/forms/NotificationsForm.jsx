import React from 'react';
import { connect } from 'react-redux';
import compose from 'lodash/flowRight';
import * as yup from 'yup';
import { Form, withFormik } from 'formik';
import { Button } from '../../../components/elements/buttons/Button';
import { authActions } from '../../../store/rootActions';
import { Checkbox } from '../../../components/form/Checkbox';
import styled from 'styled-components';

const NotificationsFormLayout = ({
  values,
  errors,
  handleSubmit,
  setFieldValue,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Styled.CheckboxWrapper>
        <Checkbox
          value={values.selectAll}
          setFieldValue={setFieldValue}
          name="selectAll"
          error={errors.selectAll}
        >
          Select all
        </Checkbox>
      </Styled.CheckboxWrapper>
      <Styled.CheckboxWrapper>
        <Checkbox
          value={values.receiveDigitalCurrency}
          setFieldValue={setFieldValue}
          name="receiveDigitalCurrency"
          error={errors.receiveDigitalCurrency}
        >
          I send or receive digital currency
        </Checkbox>
      </Styled.CheckboxWrapper>
      <Styled.CheckboxWrapper>
        <Checkbox
          value={values.merchantOrders}
          setFieldValue={setFieldValue}
          name="merchantOrders"
          error={errors.merchantOrders}
        >
          I receive merchant orders
        </Checkbox>
      </Styled.CheckboxWrapper>
      <Styled.CheckboxWrapper>
        <Checkbox
          value={values.recommendedActions}
          setFieldValue={setFieldValue}
          name="recommendedActions"
          error={errors.recommendedActions}
        >
          There are recommended actions for my account
        </Checkbox>
      </Styled.CheckboxWrapper>
      <Button type="submit">Save</Button>
    </Form>
  );
};

const Styled = {
  CheckboxWrapper: styled.div`
    margin-top: 20px;
  `,
};

const NotificationsForm = compose([
  connect(
    ({ auth }) => ({}),
    {
      updateUserAttributes: authActions.updateUserAttributes,
    }
  ),
  withFormik({
    mapPropsToValues: () => ({
      selectAll: false,
      receiveDigitalCurrency: false,
      recommendedActions: false,
    }),
    validationSchema: yup.object().shape({
      selectAll: yup.bool(),
      receiveDigitalCurrency: yup.bool(),
      recommendedActions: yup.bool(),
    }),
    handleSubmit: (values, { setSubmitting, props }) => {
      props.updateUserAttributes({
        values,
      });

      setSubmitting(false);
    },
  }),
])(NotificationsFormLayout);

export { NotificationsForm };
