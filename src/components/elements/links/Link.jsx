import styled from 'styled-components';
import { colors } from '../../../styles/const';

const LinkStyled = styled.a`
  color: ${colors.orange};
  text-decoration: underline;
`;

const LinkWhiteStyled = styled.a`
  color: ${colors.white};
  text-decoration: underline;
  font-size: 14px;
`;

export { LinkStyled as Link };
export { LinkWhiteStyled as LinkWhite };
