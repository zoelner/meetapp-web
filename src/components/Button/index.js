import styled from 'styled-components';
import { darken } from 'polished';

export default styled.button.attrs(props => ({
  color: props.color || '#d44059',
}))`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 22px;
  background: ${props => props.color};
  margin: 5px 0 0;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;
  &:hover {
    background: ${props => darken(0.1, props.color)};
  }

  svg {
    height: 20px;
    width: 20px;
    color: #fff;
    margin-right: 10px;
  }
`;
