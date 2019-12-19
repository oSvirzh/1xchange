import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Row } from 'react-bootstrap';
import { Button } from '../../src/components/elements/buttons/Button';
import { ButtonHome } from '../../src/components/elements/buttons/ButtonHome';
import { ButtonBack } from '../../src/components/elements/buttons/ButtonBack';

storiesOf('Elements', module).add('Buttons', () => (
  <Container>
    <Row>
      <h1>Buttons</h1>
    </Row>
    <Row>
      <Button>Hello world</Button>
    </Row>
    <Row>
      <ButtonHome />
    </Row>
    <Row>
      <ButtonBack>Go Back</ButtonBack>
    </Row>
  </Container>
));
