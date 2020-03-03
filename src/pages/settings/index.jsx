import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RouteConfig } from '../../config/routeConfig';
import { MyProfile } from './MyProfile';
import { Preferences } from './Preferences';
import { AccountActivity } from './AccountActivity';
import { Security } from './Security';
import Header from '../../components/layout/dashboard/Header';
import Menu from '../../components/layout/profile/Menu';
import styled from 'styled-components';
import { colors } from '../../styles/const';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import { connect } from 'react-redux';

const Settings = ({ notifications }) => {
  useEffect(() => {
    if (notifications.message)
      NotificationManager.success(notifications.message, 'SUCCESS', 5000);
  }, [notifications]);

  return (
    <Styled.Container>
      <Header />
      <Styled.Profile>
        <Menu />
        <Styled.MainInfo>
          <Switch>
            <Route path={RouteConfig.myProfile} component={MyProfile} />
            <Route path={RouteConfig.preferences} component={Preferences} />
            <Route
              path={RouteConfig.accountActivity}
              component={AccountActivity}
            />
            <Route path={RouteConfig.security} component={Security} />
            <Redirect to={RouteConfig.myProfile} />
          </Switch>
        </Styled.MainInfo>
      </Styled.Profile>
      <NotificationContainer />
    </Styled.Container>
  );
};

const Styled = {
  Profile: styled.div`
    min-height: 100vh;
  `,
  MainInfo: styled.div`
    padding: 0 100px 40px 100px;
    background: ${colors.lightblue};
    min-height: 100vh;
    overflow: hidden;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      325.95deg,
      #101728 -143.03%,
      #11192b -3.81%,
      #15213d 58.69%,
      #0c1834 131.65%
    );
    background-size: contain;
  `,
};

export default connect(({ auth }) => ({
  notifications: auth.notifications,
}))(Settings);
