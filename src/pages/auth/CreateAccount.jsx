import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from '../../components/elements/links/Link';
import Input from '../../components/form/Input';
import PhoneInput from '../../components/form/PhoneInput';
import Modal from '../../components/modal/Modal';
import { Button, ButtonGroup } from '../../components/elements/buttons/Button';
import { ButtonHome } from '../../components/elements/buttons/ButtonHome';
import {
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxContainer,
  CheckboxLabel,
} from '../../components/elements/checkbox/Checkbox';
import AuthPage from './AuthPage';
import CheckList from '../../components/elements/list/CheckList';
import PasswordInput from '../../components/form/PasswordInput';
import { Dropdown } from '../../components/form/Dropdown';

const CreateAccount = () => {
  const passwordCheckArray = [
    'At least 8 symbols',
    'At least 1 UPPERCASE letter',
    'At least 1 number',
    'At least 1 special character',
  ];

  return (
    <AuthPage activeStep="1">
      <ButtonHome />
      <Modal />
      <h1 className="title">Create an account</h1>
      <p className="paragraph">
        Already have an account? <Link href="#">Log in</Link>
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
        <CheckList columns={2} list={passwordCheckArray} />
        <PasswordInput
          label="Confirm password"
          placeholder="Confirm password"
        />
        <Dropdown />
        <PhoneInput
          label="Phone number"
          countryCode="+380"
          placeholder="Number"
        />
        <p className="paragraph">
          The security code will be sent to the number filled above
        </p>
        <CheckboxContainer>
          <HiddenCheckbox />
          <StyledCheckbox />
          <CheckboxLabel>
            I accept 1xchange's <Link href="#">Terms of Use</Link> and{' '}
            <Link href="#">Privacy policy</Link>
          </CheckboxLabel>
        </CheckboxContainer>
        <ButtonGroup>
          <Button>Continue</Button>
        </ButtonGroup>
      </Form>
    </AuthPage>
  );
};

export default CreateAccount;
