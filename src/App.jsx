import React from 'react';
import { Container, Row, Form, InputGroup } from 'react-bootstrap';
import { Button } from './components/elements/buttons/Button';
import { Link } from './components/elements/links/Link';
import { Input, Label } from './components/elements/inputs/Input';
import styled from 'styled-components';
import logo from './images/logo.svg';
import { colors } from './styles/const';

const Sidebar = styled.div`
  background: linear-gradient(
    325.95deg,
    #101728 -143.03%,
    #11192b -3.81%,
    #15213d 58.69%,
    #0c1834 131.65%
  );
  max-width: 500px;
  width: 100%;
  padding: 40px;
`;

const Main = styled.div`
  position: relative;
  flex: 1 auto;
  padding: 40px 40px 40px 120px;
  background-color: #22305a;
`;

function App() {
  return (
    <Container fluid>
      <Row>
        <Sidebar>
          <img src={logo} alt="1xchange logo" />
          <ul className="steps">
            <li className="steps__item">
              <span
                className="steps__count steps__count_active"
                data-count="1"
              />
              <span className="steps__name steps__name_active">
                Create an acсount
              </span>
            </li>
            <li className="steps__item">
              <span className="steps__count" data-count="2" />
              <span className="steps__name">Profile information</span>
            </li>
            <li className="steps__item">
              <span className="steps__count" data-count="3" />
              <span className="steps__name">ID Identification</span>
            </li>
          </ul>
        </Sidebar>
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
}

export default App;
