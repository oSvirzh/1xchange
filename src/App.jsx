import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Button } from './components/elements/buttons/Button';

function App() {
  return (
    <Container>
      <Row>
        <h1>Buttons</h1>
      </Row>
      <Row>
        <Button>Hello world</Button>
      </Row>
    </Container>
  );
}

export default App;
