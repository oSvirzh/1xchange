import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import { SidebarCmp } from '../Components/Sidebar';
import AuthBody from './AuthBody';
import VerifyEmail from '../VerifyEmail';
import PropTypes from 'prop-types';

const AuthPage = ({ children, activeStep }) => {
  return (
    <Container fluid>
      <Row>
        <SidebarCmp activeStep={activeStep} />

        <AuthBody>
          <VerifyEmail />
        </AuthBody>
      </Row>
    </Container>
  );
};

AuthPage.propType = {
  children: PropTypes.any,
  activeStep: PropTypes.string,
};

export default AuthPage;
