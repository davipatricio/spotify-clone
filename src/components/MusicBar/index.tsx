import { Tooltip } from 'react-tooltip';
import GeneralControls from './GeneralControls';
import SongInfo from './SongInfo';
import { Container, SongControls } from './styles';

export default function MusicBar() {
  return (
    <Container>
      <Tooltip anchorSelect="[data-tooltip-content]" noArrow />

      <SongInfo />
      <SongControls />
      <GeneralControls />
    </Container>
  );
}
