import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #000000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    span {
      margin-right: 20px;
      padding-right: 20px;
      svg {
        width: 32px;
        height: 32px;
        fill: #7159c1;
      }
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;
export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  align-items: center;
  justify-content: center;

  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #ffffff;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999999;
    }
  }
  button {
    background: #d44059;
    width: 71px;
    height: 42px;
    margin: 5px 0 0;
    height: 44px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.03, '#F94D6A')};
    }
  }
`;
