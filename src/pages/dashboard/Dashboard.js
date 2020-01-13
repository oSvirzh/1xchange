import React from 'react';
import { Button } from '../../components/elements/buttons/Button';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actions } from '../../store/auth/actions';
import { get } from 'lodash';

export const DashboardLayout = ({ user, signOut }) => (
  <Container>
    <h1>Hello {get(user, 'email')}</h1>
    {JSON.stringify(user)}
    <Button onClick={signOut}> Log out</Button>
  </Container>
);

export const Dashboard = connect(
  (state) => ({
    user: state.auth.user,
  }),
  { signOut: actions.signOut }
)(DashboardLayout);
