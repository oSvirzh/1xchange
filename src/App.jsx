import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthSection } from './pages/auth';
import { GlobalStyles } from './styles/global';

class AppShell extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <AuthSection />
      </div>
    );
  }
}

export const App = withRouter(AppShell);
