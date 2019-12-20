import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AuthBody from './AuthBody';
import PropTypes from 'prop-types';

const LayoutAuth = ({ children, renderLeft }) => {
  return (
    <Container fluid>
      <Row>
        {renderLeft}
        <AuthBody>{children}</AuthBody>
      </Row>
    </Container>
  );
};

LayoutAuth.propTypes = {
  children: PropTypes.any,
  renderLeft: PropTypes.any,
};

export default LayoutAuth;
