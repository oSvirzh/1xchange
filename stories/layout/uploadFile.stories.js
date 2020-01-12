import React from 'react';
import { storiesOf } from '@storybook/react';
import LayoutAuth from '../../src/components/layout/auth/LayoutAuth';
import { Sidebar } from '../../src/components/layout/auth/Sidebar';
import Dropzone from '../../src/components/elements/dropzone/Dropzone';
import '../../src/styles/styles.scss';
import { ButtonGroup } from '../../src/components/elements/buttons/Button';
import { ButtonBack } from '../../src/components/elements/buttons/ButtonBack';

storiesOf('Layout', module).add('Upload File', () => (
  <LayoutAuth renderLeft={<Sidebar activeStep={0} />}>
    <h1 className="title">Upload file</h1>
    <p className="paragraph">Upload picture of your photo id (JPEG or PNG).</p>
    <Dropzone />
    <ButtonGroup>
      <ButtonBack>Go back</ButtonBack>
    </ButtonGroup>
  </LayoutAuth>
));
