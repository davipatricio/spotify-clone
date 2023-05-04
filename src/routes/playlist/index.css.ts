import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: flex-end;
  gap: 20px;

  background-color: #ffffff12;

  padding: 20px 2rem;

  height: 320px;
  width: 100%;

  > img {
    height: 232px;
    width: 232px;
  }

  > div {
    > h6 {
      font-size: 1.45rem;
    }

    > h1 {
      font-size: 4rem;
      user-select: none;
    }

    > span {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.text.secondary};
    }
  }
`;

export const PlaylistInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 5px;
  font-size: 0.9rem;

  > img {
    border-radius: 50%;
    height: 24px;
    width: 24px;
  }

  > a {
    color: ${({ theme }) => theme.text.primary};
    text-decoration: none;
    font-weight: bold;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  > span {
    color: #fff;

    &::before {
      content: '• ';
      font-size: 1rem;
    }

    &.duration {
      color: ${({ theme }) => theme.text.secondary};
      &::before {
        content: '';
      }
    }
  }
`;
