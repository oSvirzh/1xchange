import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Row } from 'react-bootstrap';
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxLabel,
} from '../../src/components/elements/checkbox/Checkbox';
import { Link } from '../../src/components/elements/links/Link';

storiesOf('Elements', module).add('Checkbox', () => (
  <Container>
    <Row>
      <h1>Сруслі</h1>
    </Row>
    <Row>
      <CheckboxContainer>
        <HiddenCheckbox />
        <StyledCheckbox />
        <CheckboxLabel>
          I accept 1xchange&#39;s <Link href="#">Terms of Use</Link> and
          <Link href="#">Privacy policy</Link>
        </CheckboxLabel>
      </CheckboxContainer>
    </Row>
  </Container>
));
