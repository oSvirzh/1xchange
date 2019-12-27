import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Row } from 'react-bootstrap';
import { Check } from '../../src/components/elements/list/CheckList';

storiesOf('Elements', module).add('Checks', () => (
  <Container>
    <Row>
      <h1>Сруслі</h1>
    </Row>
    <Row>
      <Check>At least 8 symbols</Check>
    </Row>
  </Container>
));
