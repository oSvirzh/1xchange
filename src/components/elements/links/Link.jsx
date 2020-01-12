import styled from 'styled-components';
import { Link as LinkComponent } from 'react-router-dom';
import { colors } from '../../../styles/const';

const LinkStyled = styled(LinkComponent)`
  color: ${colors.orange};
  text-decoration: underline;
  cursor: pointer;
`;

const LinkWhiteStyled = styled(LinkComponent)`
  color: ${colors.white};
  text-decoration: underline;
  font-size: 14px;
  cursor: pointer;
`;

export { LinkStyled as Link };
export { LinkWhiteStyled as LinkWhite };
