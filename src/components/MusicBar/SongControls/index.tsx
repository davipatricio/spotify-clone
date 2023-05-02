import {
  MdOutlinePauseCircleFilled,
  MdSkipNext,
  MdSkipPrevious,
} from 'react-icons/md';
import { TiArrowRepeat, TiArrowShuffle } from 'react-icons/ti';
import { useUserSettings } from '../../../hooks/userSettings';
import RangeInput from '../../RangeInput';
import { Buttons, Container, Progress } from './styles';

export default function SongControls() {
  const { shuffle, repeat, setSettings } = useUserSettings();

  return (
    <Container>
      <Buttons>
        <TiArrowShuffle
          data-active={shuffle}
          onClick={() => setSettings({ shuffle: !shuffle })}
        />
        <MdSkipPrevious />
        <MdOutlinePauseCircleFilled data-highlight />
        <MdSkipNext />
        <TiArrowRepeat
          data-active={repeat}
          onClick={() => setSettings({ repeat: !repeat })}
        />
      </Buttons>

      <Progress>
        <span>0:00</span>
        <RangeInput disabled max={100} min={0} value={5} />
        <span>3:53</span>
      </Progress>
    </Container>
  );
}
