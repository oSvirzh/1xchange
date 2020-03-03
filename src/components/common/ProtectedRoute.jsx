import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { RouteConfig } from '../../config/routeConfig';

const ProtectedRouteComponent = ({
  component: Component,
  render,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={RouteConfig.root} />
      )
    }
  />
);

ProtectedRouteComponent.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func,
  render: PropTypes.func,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export const ProtectedRoute = connect(mapStateToProps)(ProtectedRouteComponent);
