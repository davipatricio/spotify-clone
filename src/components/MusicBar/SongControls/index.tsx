import {
  MdOutlinePauseCircleFilled,
  MdSkipNext,
  MdSkipPrevious
} from 'react-icons/md';
import { TiArrowRepeat, TiArrowShuffle } from 'react-icons/ti';
import { Buttons, Container, Progress } from './styles';

export default function SongControls() {
  return (
    <Container>
      <Buttons>
        <TiArrowShuffle data-active />
        <MdSkipPrevious />
        <MdOutlinePauseCircleFilled data-highlight />
        <MdSkipNext />
        <TiArrowRepeat />
      </Buttons>

      <Progress />
    </Container>
  );
}
