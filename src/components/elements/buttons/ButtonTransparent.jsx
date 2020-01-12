import styled from 'styled-components';
import repeatIcon from '../../../assets/images/repeat.svg';
import { colors } from '../../../styles/const';

const ButtonTransparent = styled.button`
  position: relative;
  padding: 18px 30px;
  font-size: 16px;
  line-height: 20px;
  border: none;
  background-color: transparent;
  color: ${colors.white};
  cursor: pointer;

  // &::before {
  //   content: '';
  //   position: absolute;
  //   background-image: url(${repeatIcon});
  //   background-repeat: no-repeat;
  //   width: 16px;
  //   height: 16px;
  //   left: 0;
  //   top: 50%;
  //   transform: translateY(-50%);
  // }
`;

export { ButtonTransparent };
