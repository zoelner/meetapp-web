import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
    fill: #7159c1;
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
    margin-right: 30px;
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
`;
