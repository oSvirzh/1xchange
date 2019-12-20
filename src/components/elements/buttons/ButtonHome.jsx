import styled from 'styled-components';
import homeIcon from '../../../assets/images/home.svg';

const ButtonHomeStyled = styled.a`
  position: absolute;
  right: 0;
  top: 0;
  width: 60px;
  height: 60px;
  background-image: url("${homeIcon}");
  background-repeat: no-repeat;
`;

export { ButtonHomeStyled as ButtonHome };
