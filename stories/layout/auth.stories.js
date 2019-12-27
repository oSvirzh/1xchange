import React from 'react';
import { storiesOf } from '@storybook/react';
import LayoutAuth from '../../src/components/layout/auth/LayoutAuth';
import { Sidebar } from '../../src/components/layout/auth/Sidebar';

storiesOf('Layout', module).add('Auth', () => (
  <LayoutAuth renderLeft={<Sidebar activeStep={0} />}>
    <h1>Content here</h1>
  </LayoutAuth>
));
