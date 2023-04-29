import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: auto;

  max-width: 722px;
  width: 100%;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    color: ${({ theme }) => theme.text.secondary};
    font-size: 1.8rem;

    &:hover {
      color: ${({ theme }) => theme.text.primary};
      filter: brightness(1.2);
    }

    &[data-highlight='true'] {
      color: ${({ theme }) => theme.text.primary};
      font-size: 2.3rem;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.2);
      }
    }

    &[data-active='true'] {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;

  > span {
    color: ${({ theme }) => theme.text.secondary};
    font-size: 0.7rem;
    user-select: none;
  }
`;
