import { useCallback } from 'react';
import { HiOutlineDeviceMobile } from 'react-icons/hi';
import { HiOutlineQueueList } from 'react-icons/hi2';
import { MdOutlineDevicesOther } from 'react-icons/md';
import { TbMicrophone2, TbVolume, TbVolume2, TbVolume3 } from 'react-icons/tb';
import { useUserSettings } from '../../../hooks/userSettings';
import RangeInput from '../../RangeInput';
import { Container } from './styles';

const VolumeIcon: React.FC<
  React.SVGProps<SVGSVGElement> & { volume: number }
> = (props) => {
  if (props.volume === 0) return <TbVolume3 {...props} />;
  if (props.volume > 0 && props.volume <= 50) return <TbVolume2 {...props} />;
  return <TbVolume {...props} />;
};

export default function GeneralControls() {
  const { volume, isCurrentDevice, setSettings } = useUserSettings();

  const handleVolumeMute = useCallback(
    () => setSettings({ volume: volume === 0 ? 100 : 0 }),
    [volume, setSettings]
  );

  const handleVolumeChange = useCallback(
    (volume: number) => setSettings({ volume }),
    [setSettings]
  );

  const CurrentDeviceIcon = isCurrentDevice
    ? HiOutlineDeviceMobile
    : MdOutlineDevicesOther;

  return (
    <Container>
      <TbMicrophone2 data-tooltip-content="Letra" />
      <HiOutlineQueueList data-tooltip-content="Fila" />
      <CurrentDeviceIcon
        onClick={() => setSettings({ isCurrentDevice: !isCurrentDevice })}
        data-tooltip-content="Conectar a um dispositivo"
      />

      <VolumeIcon
        onClick={handleVolumeMute}
        volume={volume}
        data-tooltip-content={volume === 0 ? 'Com som' : 'Mudo'}
      />
      <RangeInput
        min={0}
        max={100}
        value={volume}
        onChange={handleVolumeChange}
      />
    </Container>
  );
}
