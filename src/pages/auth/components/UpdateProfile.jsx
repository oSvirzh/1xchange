import React from 'react';
import FormWrapper from '../сomponents/FormWrapper';
import { UpdateProfileForm } from '../forms/UpdateProfileForm';

export const UpdateProfile = () => {
  return (
    <FormWrapper>
      <a className="home-button" href="/" />
      <h1 className="title">Fill basic profile information</h1>
      <UpdateProfileForm />
    </FormWrapper>
  );
};
