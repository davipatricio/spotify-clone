import styled, { css } from 'styled-components';

const baseFlexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.aside`
  display: flex;
  background: ${({ theme }) => theme.colors.black};

  /* 90px because of the music bar */
  height: calc(100vh - 90px);
  max-width: 285px;

  > section.library {
    ${baseFlexColumn}

    gap: 18px;
    padding: 24px;
    min-width: 220px;
    max-width: 280px;

    > img {
      height: 40px;
      width: 131px;
    }
  }

  > span.resizer {
    cursor: col-resize;
    height: 100%;
    width: 5px;

    &:hover,
    &:active {
      border-right: 1px solid #fff;
    }
  }
`;

export const LibraryLinks = styled.section`
  ${baseFlexColumn}
  gap: 17px;
  margin-top: 16px;

  > div, > a {
    cursor: pointer;
    color: ${({ theme }) => theme.text.secondary};
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.text.primary};
    }

    > svg {
      height: 24px;
      width: 24px;
    }

    > span {
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
`;
