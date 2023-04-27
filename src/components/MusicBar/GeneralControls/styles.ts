import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;

  > svg {
    cursor: pointer;
    color: ${({ theme }) => theme.text.secondary};
    font-size: 1.25rem;
    transition: 0.2s;

    &:hover {
      color: ${({ theme }) => theme.text.primary};
      transform: scale(1.02);
    }
  }

  > input {
    width: 100px;
  }
`;
