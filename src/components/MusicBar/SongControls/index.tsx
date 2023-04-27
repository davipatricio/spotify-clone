import {
  MdOutlinePauseCircleFilled,
  MdSkipNext,
  MdSkipPrevious,
} from 'react-icons/md';
import { TiArrowRepeat, TiArrowShuffle } from 'react-icons/ti';
import { Buttons, Container, Progress } from './styles';
import RangeInput from '../../RangeInput';

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

      <Progress>
        <span>0:00</span>
        <RangeInput min={0} max={100} value={5} disabled />
        <span>3:53</span>
      </Progress>
    </Container>
  );
}
