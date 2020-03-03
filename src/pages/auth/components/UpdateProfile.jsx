import React from 'react';
import FormWrapper from '../сomponents/FormWrapper';
import { UpdateProfileForm } from '../forms/UpdateProfileForm';
import { Success } from './Success';
import { RouteConfig } from '../../../config/routeConfig';
import { connect } from 'react-redux';

export const UpdateProfileLayout = ({ success }) => {
  if (success) {
    return (
      <Success
        message="Thank you for your registration. Please check your email account for further instructions."
        buttonText="Home"
        to={RouteConfig.dashboard}
      />
    );
  }

  return (
    <FormWrapper>
      <a className="home-button" href="/" />
      <UpdateProfileForm />
    </FormWrapper>
  );
};

export const UpdateProfile = connect(({ auth }) => ({
  success: auth.isDataUpdated,
}))(UpdateProfileLayout);
