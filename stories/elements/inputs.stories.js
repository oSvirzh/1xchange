import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Row } from 'react-bootstrap';
import { Input, Label } from '../../src/components/elements/inputs/Input';

storiesOf('Elements', module).add('Inputs', () => (
  <Container>
    <Row>
      <h1>Inputs</h1>
    </Row>
    <Row>
      <Label>Email address</Label>
    </Row>
    <Row>
      <Input placeholder="Please enter your email address" />
    </Row>
  </Container>
));
