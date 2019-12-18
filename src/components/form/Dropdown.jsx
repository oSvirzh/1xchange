import { Dropdown, Form, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../styles/const';
import React from 'react';
import { LabelStyled } from './Input';

const AppendStyled = styled(InputGroup.Append)`
  width: 100%;
`;

const DropdownStyled = styled(Dropdown)`
  width: 100%;
`;

const DropdownButtonStyled = styled(Dropdown.Toggle)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${colors.blue};
  font-size: 16px;
  line-height: 20px;
  background: ${colors.white};
  border: 0.5px solid ${colors.gray};
  box-sizing: border-box;
  border-radius: 3px;
  padding: 18px 17px;
`;

const DropdownInputStyled = styled(InputGroup)`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
`;

const DropdownCmp = () => {
  return (
    <Form.Group controlId="">
      <LabelStyled>Country</LabelStyled>
      <DropdownInputStyled>
        <InputGroup.Prepend>
          <InputGroup.Text>UA</InputGroup.Text>
        </InputGroup.Prepend>
        <AppendStyled>
          <DropdownStyled>
            <DropdownButtonStyled variant="success" id="dropdown-basic">
              Ukraine
            </DropdownButtonStyled>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Ukraine</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Singapur</Dropdown.Item>
              <Dropdown.Item href="#/action-3">UAE</Dropdown.Item>
            </Dropdown.Menu>
          </DropdownStyled>
        </AppendStyled>
      </DropdownInputStyled>
    </Form.Group>
  );
};

export { DropdownCmp as Dropdown };
