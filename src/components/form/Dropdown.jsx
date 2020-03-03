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
    <Styled.FormItem
      {...props}
      append={
        <Styled.Dropdown>
          <Styled.DropdownButton id="dropdown-basic">
            {selected.label}
          </Styled.DropdownButton>
          <Dropdown.Menu>
            <Options />
          </Dropdown.Menu>
        </Styled.Dropdown>
      }
    />
  );
};

const Styled = {
  FormItem: styled(FormItem)`
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
};

export { DropdownCmp as Dropdown };
