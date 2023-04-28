import styled from 'styled-components';

export const Container = styled.footer`
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 10px 16px;

  background-color: ${({ theme }) => theme.colors.darkGray};
  border-top: 1px solid ${({ theme }) => theme.colors.gray};

  height: 90px;
  width: 100%;
`;
