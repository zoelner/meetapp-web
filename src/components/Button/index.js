import styled from 'styled-components';
import { darken } from 'polished';

export default styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 22px;
  background: #d44059;
  margin: 5px 0 0;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.03, '#F94D6A')};
  }
`;
