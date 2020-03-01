import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const DropdownCmp = ({
  options,
  value = {},
  name,
  setFieldValue,
  onChange,
}) => {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange && onChange(selected);
    setFieldValue && setFieldValue(name, selected);
  }, [selected]);

  const Options = () =>
    options.map((item) => (
      <Styled.DropdownItem
        modifiers={[item.value === selected.value && 'active']}
        key={item.value}
        onClick={() => setSelected(item)}
      >
        {item.label}
      </Styled.DropdownItem>
    ));

  return (
    <Styled.Dropdown>
      <Styled.DropdownButton id="dropdown-basic">
        {selected.label}
      </Styled.DropdownButton>
      <Styled.Menu>
        <Options />
      </Styled.Menu>
    </Styled.Dropdown>
  );
};

const Modifiers = {
  DropdownItem: {
    active: () => css`
      background: #3a456102;
      border-bottom: 2px solid #eda334;
    `,
  },
};

const Styled = {
  Dropdown: styled(Dropdown)`
    margin-left: auto;
  `,
  DropdownButton: styled(Dropdown.Toggle)`
    background: #22305a;
    border: 0.5px solid #1b2745;
    box-sizing: border-box;
    border-radius: 3px;
    :hover,
    :focus {
      background: none !important;
    }
  `,
  DropdownItem: styled(Dropdown.Item)`
    padding: 10px;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
    background: #101728;

    ${applyStyleModifiers(Modifiers.DropdownItem)};
  `,
  Menu: styled(Dropdown.Menu)`
    background: linear-gradient(
      337.81deg,
      #101728 -143.03%,
      #11192b -3.81%,
      #15213d 58.69%,
      #0c1834 131.65%
    );
    box-shadow: 0px 5px 10px rgba(20, 30, 54, 0.8);
    border-radius: 3px;
    padding: 4px 0;
  `,
};

export { DropdownCmp as SmallDropdown };
