import {
  MdOutlinePauseCircleFilled,
  MdSkipNext,
  MdSkipPrevious,
} from 'react-icons/md';
import { TiArrowRepeat, TiArrowShuffle } from 'react-icons/ti';
import { Buttons, Container, Progress } from './styles';
import RangeInput from '../../RangeInput';
import { useUserSettings } from '../../../hooks/userSettings';

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
        <RangeInput min={0} max={100} value={5} disabled />
        <span>3:53</span>
      </Progress>
    </Container>
  );
}
