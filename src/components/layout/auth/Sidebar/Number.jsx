import styled, { css } from 'styled-components';
import { colors } from '../../../../styles/const';
import { applyStyleModifiers } from 'styled-components-modifiers';

const modifierConfig = {
  active: () => css`
    border: 1px solid ${colors.orange};
    color: #fff;

    &::after {
      background-color: ${colors.yellow};
      opacity: 1;
      box-shadow: 0 4px 20px ${colors.yellow};
    }
  `,
};

const Number = styled.span`
  color: #1d1d29;
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    width: 1px;
    height: 54px;
    background-color: ${colors.white};
    opacity: 0.2;
    bottom: -60px;
  }

  &::after {
    content: '${(props) => props.number}';
    position: absolute;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
   ${applyStyleModifiers(modifierConfig)};
`;

export default Number;
