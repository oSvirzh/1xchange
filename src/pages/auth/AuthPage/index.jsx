import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import { SidebarCmp } from '../Components/Sidebar';
import AuthBody from './AuthBody';
import PropTypes from 'prop-types';

const FormWrapper = styled.div`
  max-width: 460px;
`;

const AuthPage = ({ children, activeStep }) => {
  return (
    <Container fluid>
      <Row>
        <SidebarCmp activeStep={activeStep} />

        <AuthBody>
          <FormWrapper>{children} </FormWrapper>
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
