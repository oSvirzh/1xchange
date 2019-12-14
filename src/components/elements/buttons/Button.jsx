import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../../styles/const';

const ButtonStyled = styled(Button)`
  padding: 18px 30px;
  font-size: 16px;
  line-height: 20px;
  background: linear-gradient(
    60.09deg,
    ${colors.white} -11.76%,
    ${colors.white} 48.47%,
    ${colors.white} 149.64%
  );
  border-radius: 4px;
  border: none;
`;

export { ButtonStyled as Button };
