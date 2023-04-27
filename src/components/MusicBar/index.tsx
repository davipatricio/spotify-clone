import { useCallback } from 'react';
import { HiOutlineDeviceMobile } from 'react-icons/hi';
import { HiOutlineQueueList } from 'react-icons/hi2';
import {
  MdOutlineDevicesOther
} from 'react-icons/md';
import { TbMicrophone2, TbVolume, TbVolume2, TbVolume3 } from 'react-icons/tb';
import { Tooltip } from 'react-tooltip';
import { useUserSettings } from '../../hooks/userSettings';
import RangeInput from '../RangeInput';
import { Container, GeneralControls, SongControls } from './styles';
import SongInfo from './SongInfo';


export default function MusicBar() {
  const { volume, isCurrentDevice, setSettings } = useUserSettings();

  const handleVolumeMute = () => {
    setSettings({ volume: volume === 0 ? 100 : 0 });
  };

  const handleVolumeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSettings({ volume: e.target.valueAsNumber });
    },
    [setSettings]
  );

  const CurrentDeviceIcon = isCurrentDevice
    ? HiOutlineDeviceMobile
    : MdOutlineDevicesOther;

  // allow all svg props to be passed to the icon
  const VolumeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    if (volume === 0)
      return <TbVolume3 onClick={handleVolumeMute} {...props} />;
    if (volume > 0 && volume <= 50)
      return <TbVolume2 onClick={handleVolumeMute} {...props} />;
    return <TbVolume onClick={handleVolumeMute} {...props} />;
  };

  return (
    <Container>
      <Tooltip anchorSelect="[data-tooltip-content]" noArrow />

      <SongInfo />

      <SongControls />

      <GeneralControls>
        <TbMicrophone2 data-tooltip-content="Letra" />
        <HiOutlineQueueList data-tooltip-content="Fila" />
        <CurrentDeviceIcon
          onClick={() => setSettings({ isCurrentDevice: !isCurrentDevice })}
          data-tooltip-content="Conectar a um dispositivo"
        />

        {/* Volume */}
        <VolumeIcon data-tooltip-content={volume === 0 ? 'Com som' : 'Mudo'} />
        <RangeInput
          min={0}
          max={100}
          value={volume}
          onChange={handleVolumeChange}
        />
      </GeneralControls>
    </Container>
  );
}
