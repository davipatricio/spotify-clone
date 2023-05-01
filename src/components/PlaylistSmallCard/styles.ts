import styled from 'styled-components';

export const Container = styled.a`
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 16px;

  background-color: hsla(0, 0%, 100%, 0.1);
  border-radius: 4px;

  transition: 0.2s;
  text-decoration: none;

  height: 80px;

  min-width: 360px;
  width: 100%;
  max-width: 470px;

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

  > span {
    color: ${({ theme }) => theme.text.primary};
    font-size: 1.1rem;
    font-weight: bold;
  }

  > button {
    margin-left: auto;
    margin-right: 10px;
  }
`;
