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
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 48px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;

  background: rgba(0, 0, 0, 0.1);
  height: 62px;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  :not(:first-child) {
    margin-top: 10px;
  }

  strong {
    color: #fff;
    font-size: 18px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);

    span {
      margin-right: 33px;
    }
  }
`;
