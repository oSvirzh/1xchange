import React from 'react';
import { Container, Row, Form, InputGroup } from 'react-bootstrap';
import { Button } from './components/elements/buttons/Button';
import { Link } from './components/elements/links/Link';
import { Input, Label } from './components/elements/inputs/Input';
import { Check } from './components/elements/checks/Check';
import styled from 'styled-components';
import { SidebarCmp } from './components/layout/Sidebar';

const Main = styled.div`
  position: relative;
  flex: 1 auto;
  padding: 40px 40px 40px 120px;
  background-color: #22305a;
`;

const App = () => {
  return (
    <Container fluid>
      <Row>
        <SidebarCmp activeStep={1} />
        <Main>
          <a className="home-button" href="/" />
          <h1 className="title">Create an account</h1>
          <p className="paragraph">
            Already have an account? <Link href="#">Log in</Link>
          </p>
          <Form>
            <Form.Group controlId="">
              <Label>Email address</Label>
              <Input placeholder="Please enter your email address" />
            </Form.Group>
            <Form.Group controlId="">
              <Label>Password</Label>
              <Input placeholder="Please enter your password" />
            </Form.Group>
            <Form.Group>
              <Check>At least 8 symbols</Check>
              <Check>At least 1 UPPERCASE letter</Check>
            </Form.Group>
            <Form.Group>
              <Check>At least 1 number</Check>
              <Check>At least 1 special character</Check>
            </Form.Group>
            <Form.Group controlId="">
              <Label>Confirm password</Label>
              <Input placeholder="Confirm password" />
            </Form.Group>
            <Form.Group controlId="">
              <Label>Phone number</Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>+380</InputGroup.Text>
                </InputGroup.Prepend>
                <Input placeholder="Number" />
              </InputGroup>
            </Form.Group>
            <p className="paragraph">
              The security code will be sent to the number filled above
            </p>
            <Button>Continue</Button>
          </Form>
        </Main>
      </Row>
    </Container>
  );
};

export default App;
