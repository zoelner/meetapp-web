import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;
  label {
    display: block;
    position: relative;
    text-align: center;

    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 4px;
    }

    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.3);

      display: flex;
      flex-direction: column;
      align-items: center;

      svg {
        margin-bottom: 10px;
      }
    }
    input {
      display: none;
    }
  }
`;
