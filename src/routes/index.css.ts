import styled from 'styled-components';

interface PlaylistContainerProps {
  $minWidth: number;
}

export const PlaylistContainer = styled.header<PlaylistContainerProps>`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${({ $minWidth }) => $minWidth}px, 1fr)
  );
  gap: 16px;

  margin-top: 25px;

  h2 {
    grid-column: 1 / -1;
  }
`;
