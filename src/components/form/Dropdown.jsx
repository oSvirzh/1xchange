import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../styles/const';
import FormItem from './FormItem';

const DropdownCmp = ({
  options,
  value = {},
  name,
  setFieldValue,
  onChange,
  ...props
}) => {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange && onChange(selected);
    setFieldValue && setFieldValue(name, selected);
  }, [selected]);

  const Options = () =>
    options.map((item) => (
      <Dropdown.Item key={item.value} onClick={() => setSelected(item)}>
        {item.label}
      </Dropdown.Item>
    ));
  // TODO create specify dropdown for Country list
  return (
    <FormItem
      {...props}
      append={
        <Styled.Dropdown>
          <Styled.DropdownButton id="dropdown-basic">
            {selected.label}
          </Styled.DropdownButton>
          <Styled.DropdownMenu>
            <Options />
          </Styled.DropdownMenu>
        </Styled.Dropdown>
      }
    />
  );
};

const Styled = {
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
  DropdownMenu: styled(Dropdown.Menu)`
    max-height: 400px;
    overflow: scroll;
  `,
};

export { DropdownCmp as Dropdown };
