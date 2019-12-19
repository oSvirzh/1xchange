import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../../styles/const';

const ButtonStyled = styled(Button)`
  padding: 18px 30px;
  font-size: 16px;
  line-height: 20px;
  background: linear-gradient(
    60.09deg,
    ${colors.orange} -11.76%,
    ${colors.yellow} 48.47%,
    ${colors.pink} 149.64%
  );
  border-radius: 4px;
  border: none;
  color: ${colors.white};
`;

const ButtonGroupStyled = styled.div`
  margin-top: 30px;
`;

export { ButtonStyled as Button };
export { ButtonGroupStyled as ButtonGroup };
