import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 4px;

  padding: 16px;

  height: 280px;
  min-width: 175px;
  width: 100%;
  max-width: 240px;

  > img {
    border-radius: 4px;
    height: 164px;
    width: 164px;
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
