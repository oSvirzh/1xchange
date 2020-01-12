import React from 'react';
import { Button } from '../../components/elements/buttons/Button';
import { Container } from 'react-bootstrap';

export const Dashboard = () => (
  <Container>
    Hello <Button onClick={console.log('asd')}> asdasd</Button>
  </Container>
);
