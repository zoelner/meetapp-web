import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  form {
    input,
    textarea {
      width: 100%;
      outline: 0;
      border: 0;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
      color: #515366;
      padding: 0 15px;
      height: 48px;
      margin-top: 10px;
      font: inherit;

      &::placeholder {
        color: #999;
      }
    }

    textarea {
      resize: none;
      height: 200px;
      padding: 15px;
    }

    button {
      margin-top: 20px;
      margin-left: auto;
    }
  }
`;
