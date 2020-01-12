import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Container, Row } from 'react-bootstrap';
import { Checkbox } from '../../src/components/form/Checkbox';
import { Link } from '../../src/components/elements/links/Link';

storiesOf('Elements', module)
  .addDecorator(StoryRouter())
  .add('Checkbox', () => (
    <Container>
      <Row>
        <h1>Сруслі</h1>
      </Row>
      <Row>
        <Checkbox>
          I accept 1xchange&#39;s <Link href="#">Terms of Use</Link> and
          <Link href="#">Privacy policy</Link>
        </Checkbox>
      </Row>
    </Container>
  ));
