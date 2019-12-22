import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Row } from 'react-bootstrap';
import { Link, LinkWhite } from '../../src/components/elements/links/Link';

storiesOf('Elements', module).add('Links', () => (
  <Container>
    <Row>
      <h1>Links</h1>
    </Row>
    <Row>
      <Link href="#">Click</Link>
    </Row>
    <Row>
      <LinkWhite href="#">Click</LinkWhite>
    </Row>
  </Container>
));
