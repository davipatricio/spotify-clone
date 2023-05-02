import styled, { css } from 'styled-components';

const baseFlexColumn = css`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const noWrap = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Container = styled.aside`
  display: flex;
  background: ${({ theme }) => theme.colors.black};

  /* 90px because of the music bar */
  height: calc(100vh - 90px);
  max-width: 285px;

  > section.library {
    ${baseFlexColumn}

    padding: 24px;
    min-width: 155px;
    max-width: 280px;

    > a img {
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
      border-right: 1px solid ${({ theme }) => theme.colors.gray};
      filter: brightness(2);
    }
  }
`;

export const UserLibraryLinks = styled.section`
  ${baseFlexColumn}
  margin-top: 16px;

  > div,
  > a {
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
      flex-shrink: 0;
    }

    > span {
      font-size: 0.76rem;
      font-weight: bold;
      ${noWrap};
    }
  }
`;

export const LibraryActions = styled.section`
  ${baseFlexColumn}
  margin-top: 25px;

  > a {
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      span {
        color: ${({ theme }) => theme.text.primary} !important;
      }

      svg {
        filter: brightness(1.3);
      }
    }

    span {
      font-size: 0.8rem;
      ${noWrap};
    }

    span,
    svg {
      transition: all 0.3s;
      color: ${({ theme }) => theme.text.secondary};
      font-weight: bold;
    }

    svg {
      flex-shrink: 0;
      border-radius: 2px;
      padding: 2px;
      height: 24px;
      width: 24px;
    }

    &.create-playlist svg {
      color: #000;
      padding: 0;
      background: #ccc;
    }

    &.liked svg {
      color: #ccc;
      background: linear-gradient(135deg, #450af5, #c4efd9);
    }

    &.podcasts svg {
      color: #1ed760;
      background: #006450;
    }
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;

  background: ${({ theme }) => theme.colors.gray};
`;
