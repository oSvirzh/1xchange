import React from 'react';
import { storiesOf } from '@storybook/react';
import LayoutAuth from '../../src/components/layout/auth/LayoutAuth';
import { Sidebar } from '../../src/components/layout/auth/Sidebar';
import '../../src/styles/styles.scss';
import { ButtonBack } from '../../src/components/elements/buttons/ButtonBack';
import { Row } from 'react-bootstrap';

storiesOf('Layout', module).add('From Mobile', () => (
  <LayoutAuth renderLeft={<Sidebar activeStep={0} />}>
    <h1 className="title">Upload from mobile camera</h1>
    <p className="paragraph">
      Click the link we just sent to +xxx xxxxxxx00 and upload photos of your
      document.
    </p>
    <p className="subtitle">
      Please do not leave this page until you are done uploading.
    </p>
    <ButtonBack>Go Back</ButtonBack>
  </LayoutAuth>
));
