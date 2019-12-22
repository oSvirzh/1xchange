import React from 'react';
import { Button, ButtonGroup } from '../../components/elements/buttons/Button';
import styled from 'styled-components';
import { Link, LinkWhite } from '../../components/elements/links/Link';
import FormWrapper from './сomponents/FormWrapper';
import { Form, InputGroup } from 'react-bootstrap';
import Input from '../../components/form/Input';
import { Checkbox } from '../../components/form/Checkbox';
import PasswordInput from '../../components/form/PasswordInput';

const Login = () => {
  return (
    <>
      <FormWrapper>
        <h1 className="title">Sign in</h1>
        <p className="paragraph">
          Do not have the account? <Link href="#">Sign up</Link>
        </p>
        <Form>
          <Input
            label="Email address"
            placeholder="Please enter your email address"
          />
          <PasswordInput
            label="Password"
            placeholder="Please enter your password"
          />
          <InputGroupStyled>
            <Checkbox>Keep me signed in on this computer</Checkbox>
            <LinkWhite href="#">Forgot Password</LinkWhite>
          </InputGroupStyled>
          <ButtonGroup>
            <Button>Sign in</Button>
          </ButtonGroup>
        </Form>
      </FormWrapper>
    </>
  );
};

const InputGroupStyled = styled(InputGroup)`
  justify-content: space-between;
`;

export default Login;
