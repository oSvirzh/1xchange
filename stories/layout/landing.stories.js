import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../src/styles/styles.scss';
import LandingLayout from '../../src/components/layout/landing/LandingLayout';

storiesOf('Pages', module).add('Landing', () => (
    <LandingLayout />
));
