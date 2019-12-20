import styled from 'styled-components';
import { colors } from '../../../styles/const';

export const StyledCheckbox = styled.span`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid ${colors.orange};

  &::before {
    position: absolute;
    bottom: 4px;
    left: 4px;
    content: '';
    width: 6px;
    height: 8px;
    transform: rotate(45deg);
    border: solid ${colors.orange};
    border-width: 0 2px 2px 0;
  }
`;
