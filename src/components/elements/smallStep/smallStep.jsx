import styled from 'styled-components';
import { colors } from '../../../styles/const';

const Step = styled.p`
  position: relative;
  padding-left: 40px;
  color: ${colors.white};
  font-size: 14px;
  line-height: 18px;

  &::before {
    content: attr(data-count);
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: ${colors.yellow};
    border-radius: 50%;
    left: 0;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:not(last-child) {
    margin-top: 20px;
  }
`;

export default Step;
