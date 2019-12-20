import styled, { css } from 'styled-components';
import { colors } from '../../../../styles/const';
import { applyStyleModifiers } from 'styled-components-modifiers';

const modifierConfig = {
  active: () => css`
    &_active {
      color: #fff;
      opacity: 1;

      &::after {
        background-color: ${colors.orange};
        opacity: 1;
      }
    }
  `,
};

const Name = styled.span`
  color: #c4c4c4;
  position: relative;
  padding-left: 17px;
  margin-left: 14px;
  opacity: 0.6;
  font-weight: 400;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 7px;
    height: 7px;
    background-color: ${colors.white};
    opacity: 0.5;
    left: 0;
    border-radius: 50%;
  }

  ${applyStyleModifiers(modifierConfig)};
`;

export default Name;
