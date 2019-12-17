import styled from 'styled-components';
import { colors } from '../../../styles/const';
import icon from '../../../assets/images/logo.svg';

const CheckStyled = styled.span`
  position: relative;
  display: inline-block;
  padding-left: 26px;
  font-size: 12px;
  color: ${colors.white};

  &:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-image: 'url(' + icon + ')';
  }

  &:not(:first-child) {
    margin-left: 50px;
  }
`;

export { CheckStyled as Check };
