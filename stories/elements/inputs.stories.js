import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Row } from 'react-bootstrap';
import Input from '../../src/components/form/Input';
import CodeInput from '../../src/components/form/CodeInput';

storiesOf('Elements', module).add('Inputs', () => (
  <Container>
    <Row>
      <h1>Inputs</h1>
    </Row>
    <Row>
      <Input
        label="Enter email"
        placeholder="Please enter your email address"
      />
    </Row>
    <Row>
      <CodeInput label="Authentication code" placeholder="0000000" />
    </Row>
  </Container>
));
