import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  height: 90%;
  width: 100%;

  > svg {
    font-size: 3rem;
  }

  > h1 {
    font-size: 1.5rem;
  }
`;