import styled from 'styled-components';
import ContainerModel from '~/components/Container';

export const Container = styled(ContainerModel)`
  form {
    input,
    textarea {
      width: 100%;
      outline: 0;
      border: 0;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
      color: rgba(255, 255, 255, 0.9);
      padding: 0 15px;
      height: 48px;
      margin-top: 10px;
      font: inherit;

      &::placeholder {
        color: rgba(255, 255, 255, 0.8);
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
