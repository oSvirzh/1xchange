import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthSection } from './pages/auth';
import { GlobalStyles } from './styles/global';

class AppShell extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <AuthSection />
      </>
    );
  }
}

export const App = withRouter(AppShell);
