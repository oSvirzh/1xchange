import React from 'react';
import { storiesOf } from '@storybook/react';
import LayoutAuth from '../../src/components/layout/auth/LayoutAuth';
import { Sidebar } from '../../src/components/layout/auth/Sidebar';
import WebCamFlow from '../../src/components/layout/WebCamFlow';
import '../../src/styles/styles.scss';
import {
  Button,
  ButtonGroup,
} from '../../src/components/elements/buttons/Button';
import { ButtonBack } from '../../src/components/elements/buttons/ButtonBack';

storiesOf('Layout', module).add('From Web Cam', () => (
  <LayoutAuth renderLeft={<Sidebar activeStep={0} />}>
    <h1 className="title">Upload from webcam</h1>
    <WebCamFlow />
    <ButtonGroup>
      <Button>Take photo</Button>
    </ButtonGroup>
    <ButtonGroup>
      <ButtonBack>Go back</ButtonBack>
    </ButtonGroup>
  </LayoutAuth>
));
