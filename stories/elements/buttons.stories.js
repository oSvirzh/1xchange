import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Row } from 'react-bootstrap';
import { Button } from '../../src/components/elements/buttons/Button';

storiesOf('Elements', module).add('Buttons', () => (
  <Container>
    <Row>
      <h1>Buttons</h1>
    </Row>
    <Row>
      <Button>Hello world</Button>
    </Row>
  </Container>
));
