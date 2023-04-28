import styled from 'styled-components';

interface ContainerProps {
  $cutSongName?: boolean;
  $hasLikedSong?: boolean;
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 8px;

  max-width: 355px;

  .album-image {
    position: relative;

    &,
    > a img {
      background-color: ${({ theme }) => theme.colors.gray};
      border-radius: 5px;
      height: 56px;
      width: 56px;
    }

    a:hover {
      + button {
        display: inline-block;
      }
    }

    > button {
      appearance: none;
      position: absolute;
      top: 3px;
      left: 33px;
      background: rgba(0, 0, 0, 0.67);
      border-radius: 50%;
      border: none;
      display: none;

      text-align: center;

      height: 20px;
      width: 20px;

      &:hover {
        display: inline-block;
      }

      > svg {
        font-size: 0.8rem;
      }

      &:hover {
        background: #000;
        transform: scale(1.1);

        > svg {
          font-size: 0.9rem;
        }
      }
    }
  }

  .album-info {
    display: flex;
    flex-direction: column;
    width: 250px;

    a {
      text-decoration: none;

      &:hover {
        color: ${({ theme }) => theme.text.primary} !important;
        text-decoration: underline;
      }
    }

    /* Song name */
    > a {
      display: inline-block;
      color: ${({ theme }) => theme.text.primary};
      white-space: nowrap;
      overflow: hidden;
      font-size: 0.85rem;

      width: 100%;

      ${({ $cutSongName }) =>
        $cutSongName &&
        `mask-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 1) 80%,
          rgba(0, 0, 0, 0) 100%
        );`}
    }

    .artists {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 250px;

      & span,
      & a {
        color: ${({ theme }) => theme.text.secondary};
        font-size: 0.8rem;
        width: 250px;
      }
    }
  }

  > button {
    background: none;
    border: none;

    > svg {
      color: ${({ theme }) => theme.text.secondary};
      font-size: 1.25rem;

      ${({ theme, $hasLikedSong }) =>
        $hasLikedSong && `color: ${theme.colors.green};`}
    }
  }
`;
