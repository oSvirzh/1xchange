import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthSection } from './pages/auth';
import { GlobalStyles } from './styles/global';
import { Main } from './pages/Main';
import { Dashboard } from './pages/dashboard/Dashboard';
import { actions } from './store/auth/actions';

const AppShell = ({ isAuthenticated, getCurrentSession }) => {
  useEffect(() => {
    getCurrentSession();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Dashboard />
      {/*{isAuthenticated ? <Main /> : <AuthSection />}*/}
    </>
  );
};

export const App = withRouter(
  connect(
    (state) => ({ isAuthenticated: state.auth.isAuthenticated }),
    { getCurrentSession: actions.getCurrentSession }
  )(AppShell)
);
