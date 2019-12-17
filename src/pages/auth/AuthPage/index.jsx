import React from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import { SidebarCmp } from '../Components/Sidebar';
import { Link } from '../../../components/elements/links/Link';
import AuthBody from './AuthBody';

const AuthPage = ({ children, activeStep }) => {
  return (
    <Container fluid>
      <Row>
        <SidebarCmp activeStep={activeStep} />
        <AuthBody>
          <a className="home-button" href="/" />
          <h1 className="title">Create an account</h1>
          <p className="paragraph">
            Already have an account? <Link href="#">Log in</Link>
          </p>
          <Form>{children}</Form>
        </AuthBody>
      </Row>
    </Container>
  );
};

export default AuthPage;
