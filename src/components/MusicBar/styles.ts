import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* debug */
  margin-top: 10px;

  padding: 10px 16px;

  background-color: ${({ theme }) => theme.colors.darkGray};
  border-top: 1px solid ${({ theme }) => theme.colors.gray};

  height: 90px;
  width: 100%;
`;

export const SongControls = styled.section``;

export const GeneralControls = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    cursor: pointer;
    color: ${({ theme }) => theme.text.secondary};
    font-size: 1.25rem;
    transition: 0.2s;

    &:hover {
      color: ${({ theme }) => theme.text.primary};
      transform: scale(1.02);
    }
  }
`;
