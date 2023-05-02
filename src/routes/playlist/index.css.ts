import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: flex-end;
  gap: 20px;

  background-color: #FFFFFF12;

  padding: 20px;
  padding-right: 0;

  height: 320px;
  width: 100%;

  > img {
    height: 232px;
    width: 232px;
  }

  > div {
    h6 {
      font-size: 1.45rem;
    }

    h1 {
      font-size: 4rem;
      user-select: none;
    }

    span {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.text.secondary};
    }
  }
`;
