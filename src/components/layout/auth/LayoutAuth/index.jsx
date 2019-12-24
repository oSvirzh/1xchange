import React from 'react';
import styled from 'styled-components';
import AuthBody from './AuthBody';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled = {
  Container: styled.div`
    display: flex;
    min-height: 100vh;
  `,
};

const LayoutAuth = ({ children, renderLeft }) => {
  return (
    <Styled.Container fluid>
      {renderLeft}
      <AuthBody>{children}</AuthBody>
    </Styled.Container>
  );
};

LayoutAuth.propTypes = {
  children: PropTypes.any,
  renderLeft: PropTypes.any,
};

export default LayoutAuth;
