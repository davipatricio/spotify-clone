import { Tooltip } from 'react-tooltip';
import GeneralControls from './GeneralControls';
import SongControls from './SongControls';
import SongInfo from './SongInfo';
import { Container } from './styles';

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
