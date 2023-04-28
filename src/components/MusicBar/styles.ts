import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 16px;

  background-color: ${({ theme }) => theme.colors.darkGray};
  border-top: 1px solid ${({ theme }) => theme.colors.gray};

  height: 90px;
  width: 100%;
`;
