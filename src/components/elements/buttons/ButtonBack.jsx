import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import arrowLeftIcon from '../../../assets/images/arrot-left.svg';
import { colors } from '../../../styles/const';

const ButtonBackStyled = styled(Button)`
  position: relative;
  padding-left: 22px;
  font-size: 16px;
  line-height: 20px;
  border: none;
  background-color: transparent;
  color: ${colors.white};

  &::before {
    content: '';
    position: absolute;
    background-image: url(${arrowLeftIcon});
    background-repeat: no-repeat;
    width: 12px;
    height: 8px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export { ButtonBackStyled as ButtonBack };
