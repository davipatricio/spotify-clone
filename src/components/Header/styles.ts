import styled from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: transparent;
  backdrop-filter: blur(5px);

  padding: 1rem 2rem;

  height: 64px;
  width: 100%;

  z-index: 10;
`;

export const NavigationButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  position: relative;
  left: 0;

  > button {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.87);
    border-radius: 50%;
    border: none;
    color: #fff;

    height: 32px;
    width: 32px;

    &:hover {
      background: #000;
    }

    &[disabled] {
      cursor: auto;
      background: rgba(0, 0, 0, 0.67);
      color: #ffffff67;
    }
  }
`;

export const AccountButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
