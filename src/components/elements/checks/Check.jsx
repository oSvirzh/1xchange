import styled from 'styled-components';
import { colors } from '../../../styles/const';
import icon from '../../../assets/images/checked.svg';

const CheckStyled = styled.span`
  position: relative;
  display: inline-block;
  padding-left: 26px;
  font-size: 12px;
  color: ${colors.white};

  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: url("${icon}") no-repeat;
    left: 0;
  }

  &:not(:first-child) {
    margin-left: 50px;
  }
`;

export { CheckStyled as Check };
