import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Row } from 'react-bootstrap';
import { Check } from '../../src/components/elements/checks/Check';

storiesOf('Elements', module).add('Checks', () => (
  <Container>
    <Row>
      <h1>Сруслі</h1>
    </Row>
    <Row>
        <label className="container">Two
            <input type="checkbox">
                <span className="checkmark"></span>
        </label>
    </Row>
  </Container>
));
