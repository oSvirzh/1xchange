import styled from 'styled-components';
import Number from '../Sidebar/Number';

const Item = styled.li`
  display: flex;
  align-items: center;

  font-weight: 800;
  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 64px;
  }

  &:last-child ${Number}:before {
    content: none;
  }
`;

export default Item;
