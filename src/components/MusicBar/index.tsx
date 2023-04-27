import {
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdOutlineDevicesOther,
} from 'react-icons/md';
import { TbMicrophone2, TbVolume3, TbVolume2, TbVolume } from 'react-icons/tb';
import { HiOutlineDeviceMobile } from 'react-icons/hi';
import { HiOutlineQueueList } from 'react-icons/hi2';
import { SlArrowUp } from 'react-icons/sl';
import { useCallback, useState } from 'react';
import { Container, SongControls, GeneralControls, SongInfo } from './styles';
import RangeInput from '../RangeInput';
import ArtistNames from './ArtistNames';
import { Tooltip } from 'react-tooltip';

const DEMO_SONG = {
  name: 'Too Many Nights (feat. Don Toliver & with Future)',
  artists: ['Metro Boomin', 'Future', 'Don Toliver'],
  cover: 'https://i.scdn.co/image/ab67616d00001e02cdce39ecb633bea9ef7705a6',
};

export default function MusicBar() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCurrentDevice, setIsCurrentDevice] = useState(false);
  const [volume, setVolume] = useState(100);

  const cutSongName = DEMO_SONG.name.length > 30;

  const handleVolumeMute = () => {
    setVolume(volume === 0 ? 100 : 0);
  };
  const handleVolumeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setVolume(e.target.valueAsNumber);
    },
    []
  );

  const FavoriteIcon = isFavorite ? MdOutlineFavorite : MdOutlineFavoriteBorder;
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

      <SongInfo $cutSongName={cutSongName} $hasLikedSong={isFavorite}>
        <div className="album-image">
          <img src={DEMO_SONG.cover} alt="Song Cover" draggable="false" />
          <button type="button">
            <SlArrowUp />
          </button>
        </div>

        <div className="album-info">
          <a href="#">{DEMO_SONG.name}</a>
          <div className="artists">
            <ArtistNames artists={DEMO_SONG.artists} />
          </div>
        </div>

        <button
          onClick={() => setIsFavorite(!isFavorite)}
          type="button"
          data-tooltip-content={
            isFavorite
              ? 'Remover da sua biblioteca'
              : 'Salvar na sua biblioteca'
          }
        >
          <FavoriteIcon />
        </button>
      </SongInfo>

      <SongControls />

      <GeneralControls>
        <TbMicrophone2 data-tooltip-content="Letra" />
        <HiOutlineQueueList data-tooltip-content="Fila" />
        <CurrentDeviceIcon
          onClick={() => setIsCurrentDevice(!isCurrentDevice)}
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
