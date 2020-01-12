import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Row } from 'react-bootstrap';
import { CheckList } from '../../src/components/elements/list/CheckList';

storiesOf('Elements', module).add('Checks', () => (
  <Container>
    <Row>
      <h1>Сруслі</h1>
    </Row>
    <Row>
      <CheckList>At least 8 symbols</CheckList>
    </Row>
  </Container>
));
