import styled from 'styled-components';

interface PlaylistContainerProps {
  $maxWidth?: number | string;
  $minWidth?: number | string;
}

function handleGrid(minWidth?: number | string, maxWidth?: number | string) {
  let string = 'grid-template-columns: repeat(auto-fill, minmax(';
  if (minWidth) {
    if (typeof minWidth === 'number') string += `${minWidth}px`;
    else string += minWidth;
  } else string += 'auto';

  string += ', ';

  if (maxWidth) {
    if (typeof maxWidth === 'number') string += `${maxWidth}px`;
    else string += maxWidth;
  } else string += 'auto';

  string += '));';

  return string;
}

export const PlaylistContainer = styled.header<PlaylistContainerProps>`
  display: grid;
  ${({ $minWidth, $maxWidth }) => handleGrid($minWidth, $maxWidth)}

  gap: 16px;
  margin-top: 26px;

  width: 100%;

  h2 {
    grid-column: 1 / -1;
  }
`;
