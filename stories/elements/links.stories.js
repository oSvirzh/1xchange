import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Container, Row } from 'react-bootstrap';
import { Link, LinkWhite } from '../../src/components/elements/links/Link';

storiesOf('Elements', module)
  .addDecorator(StoryRouter())
  .add('Links', () => (
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
