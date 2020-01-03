import React from 'react';
import { connect } from 'react-redux';
import { RouteConfig } from '../../../config/routeConfig';
import { Link } from '../../../components/elements/links/Link';
import FormWrapper from '../сomponents/FormWrapper';
import { CreateAccountForm } from '../forms/CreateAccountForm';
import { register } from '../../../store/auth/actions';

const CreateAccountLayout = ({ registerAction }) => {
  // registerAction({
  //   email: 'svirzh22@gmail.com',
  //   password: 'Dniwe123.',
  //   phoneNumber: '+380687358904',
  // });
  return (
    <FormWrapper>
      <a className="home-button" href="/" />
      <h1 className="title">Create an account</h1>
      <p className="paragraph">
        Already have an account? <Link to={RouteConfig.login}>Log in</Link>
      </p>
      <CreateAccountForm />
    </FormWrapper>
  );
};

const mapStateToProps = (state) => {};

const mapDispatchToProps = { registerAction: register };

export const CreateAccount = connect(
  null,
  mapDispatchToProps
)(CreateAccountLayout);
