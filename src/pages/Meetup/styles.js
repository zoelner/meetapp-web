import styled from 'styled-components';

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #fff;
    font-size: 32px;
  }

  div {
    display: flex;

    button {
      margin-left: 15px;
    }
  }
`;

export const Image = styled.img`
  margin-top: 52px;
  width: 100%;
  height: 300px;
  object-fit: cover;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
`;

export const Content = styled.div`
  margin-top: 25px;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.9);

  p + p {
    margin-top: 25px;
  }
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 30px;

  span {
    display: flex;
    align-items: center;

    color: rgba(255, 255, 255, 0.6);

    :not(:first-child) {
      margin-left: 33px;
    }

    svg {
      margin-right: 10px;
    }
  }
`;
