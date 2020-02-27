import React from 'react';
import { storiesOf } from '@storybook/react';
import LayoutAuth from '../../src/components/layout/auth/LayoutAuth';
import { Sidebar } from '../../src/components/layout/auth/Sidebar';
import SettingsProfile from '../../src/pages/profile/index';
import '../../src/styles/styles.scss';
import {
  Button,
  ButtonGroup,
} from '../../src/components/elements/buttons/Button';
import { ButtonBack } from '../../src/components/elements/buttons/ButtonBack';

storiesOf('Pages', module).add('Settings Profile', () => (
    <SettingsProfile />
));
