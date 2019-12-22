import { Dropdown, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../styles/const';
import React from 'react';
import FormItem from './FormItem';

const DropdownCmp = () => {
  return (
    <FormItem label="Country">
      <Styled.DropdownInput>
        <InputGroup.Prepend>
          <InputGroup.Text>UA</InputGroup.Text>
        </InputGroup.Prepend>
        <Styled.Append>
          <Styled.Dropdown>
            <Styled.DropdownButton variant="success" id="dropdown-basic">
              Ukraine
            </Styled.DropdownButton>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Ukraine</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Singapur</Dropdown.Item>
              <Dropdown.Item href="#/action-3">UAE</Dropdown.Item>
            </Dropdown.Menu>
          </Styled.Dropdown>
        </Styled.Append>
      </Styled.DropdownInput>
    </FormItem>
  );
};

const Styled = {
  Append: styled(InputGroup.Append)`
    width: 100%;
  `,

  Dropdown: styled(Dropdown)`
    width: 100%;
  `,

  DropdownButton: styled(Dropdown.Toggle)`
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
  `,

  DropdownInput: styled(InputGroup)`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
  `,
};

export { DropdownCmp as Dropdown };
