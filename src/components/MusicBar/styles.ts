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

interface SongInfoProps {
  $cutSongName?: boolean;
  $hasLikedSong?: boolean;
}

export const SongInfo = styled.section<SongInfoProps>`
  display: flex;
  align-items: center;
  gap: 15px;

  .album-image {
    position: relative;

    &,
    > img {
      border-radius: 5px;
      height: 56px;
      width: 56px;
    }

    > button {
      display: none;
    }

    &:hover {
      > button {
        display: inline;
        position: absolute;
        top: 3px;
        left: 33px;

        background: rgba(0, 0, 0, 0.67);
        border: none;
        border-radius: 50%;

        text-align: center;

        height: 20px;
        width: 20px;

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
  }

  .album-info {
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
      width: 230px;

      ${({ $cutSongName }) =>
        $cutSongName &&
        `mask-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 1) 60%,
          rgba(0, 0, 0, 0) 100%
        );`}
    }

    div.artists span,
    div.artists a {
      color: ${({ theme }) => theme.text.secondary};
      font-size: 0.9rem;
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
