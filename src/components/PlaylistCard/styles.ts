import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const commonCSS = css`
  cursor: pointer;

  color: initial;
  text-decoration: none;

  display: flex;

  border-radius: 4px;
  transition: 0.2s;

  width: 100%;
`;

export const LargeContainer = styled(Link)`
  ${commonCSS}

  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.darkGray};

  padding: 16px;

  height: 280px;
  width: 196px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.gray};

    button {
      opacity: 1;
      animation: bottomToUp 0.3s ease-in-out;
    }
  }

  > div {
    position: relative;
    height: 164px;
    width: 164px;
    overflow: hidden;

    > img {
      border-radius: 4px;
      height: 164px;
      width: 164px;
    }

    > button {
      position: absolute;
      bottom: 7px;
      right: 5px;
    }
  }

  /* Playlist title */
  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 16px;
    font-size: 1rem;
    font-weight: bold;
  }

  /* Playlist description */
  > span {
    color: ${({ theme }) => theme.text.secondary};

    overflow: hidden;

    /* only show 2 lines */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;

    font-size: 0.9rem;

    margin-top: 4px;
  }
`;

export const SmallContainer = styled(Link)`
  ${commonCSS}

  align-items: center;
  gap: 16px;

  background-color: hsla(0, 0%, 100%, 0.1);

  height: 80px;

  min-width: 360px;
  max-width: 500px;

  &:hover,
  &:focus {
    background-color: hsla(0, 0%, 100%, 0.2);

    > button {
      opacity: 1;
    }
  }

  > img {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    height: 80px;
    width: 80px;
  }

  > p {
    color: ${({ theme }) => theme.text.primary};
    font-size: 1.1rem;
    font-weight: bold;
  }

  > button {
    margin-left: auto;
    margin-right: 10px;
  }
`;
