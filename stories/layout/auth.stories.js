import React from 'react';
import { storiesOf } from '@storybook/react';
import LayoutAuth from '../../src/components/layout/auth/LayoutAuth';
import { SidebarCmp } from '../../src/components/layout/auth/Sidebar';
import { Cards } from '../../src/components/elements/card/index';
import '../../src/styles/styles.scss';

storiesOf('Layout', module).add('Auth', () => (
  <LayoutAuth renderLeft={<SidebarCmp activeStep={0} />}>
    <h1 className="title">Select ID type</h1>
    <p className="paragraph">
      To help protect you against identity theft, let's verify your identity.
      Why it's important to verify your ID.
    </p>
    <Cards />
  </LayoutAuth>
));
