import styled from 'styled-components';

interface PlaylistContainerProps {
  $minWidth?: number;
  $maxWidth?: number;
}

export const PlaylistContainer = styled.header<PlaylistContainerProps>`
  display: grid;
  ${({ $minWidth }) =>
    $minWidth &&
    `grid-template-columns: repeat(auto-fill, minmax(${$minWidth}px, 1fr));`}

  ${({ $maxWidth }) =>
    $maxWidth && `grid-template-columns: repeat(auto-fill, ${$maxWidth}px);`}

  gap: 16px;
  margin-top: 26px;

  h2 {
    grid-column: 1 / -1;
  }
`;
