import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LayoutAuth = ({ children, renderLeft }) => {
  return (
    <Styled.Container fluid>
      {renderLeft}
      <Styled.AuthBody>{children}</Styled.AuthBody>
    </Styled.Container>
  );
};

LayoutAuth.propTypes = {
  children: PropTypes.any,
  renderLeft: PropTypes.any,
};

const Styled = {
  Container: styled.div`
    display: flex;
    min-height: 100vh;
  `,
  AuthBody: styled.div`
    position: relative;
    flex: 1 auto;
    padding: 40px 120px 40px 120px;
    background-color: #22305a;
  `,
};

export default LayoutAuth;
