import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AuthBody from './AuthBody';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LayoutAuth = ({ children, renderLeft }) => {
  return (
    <Container fluid>
      <RowStyled>
        {renderLeft}
        <AuthBody>{children}</AuthBody>
      </RowStyled>
    </Container>
  );
};

const RowStyled = styled(Row)`
  min-height: 100vh;
`;

LayoutAuth.propTypes = {
  children: PropTypes.any,
  renderLeft: PropTypes.any,
};

export default LayoutAuth;
