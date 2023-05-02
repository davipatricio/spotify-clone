import { useState } from 'react';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { SlArrowUp } from 'react-icons/sl';
import { useCurrentSong } from '../../../hooks/currentSong';
import ArtistNames from './ArtistNames';
import { Container } from './styles';

export default function SongInfo() {
  const currentSong = useCurrentSong();
  const [isFavorite, setIsFavorite] = useState(false);

  const cutSongName = currentSong.name.length > 30;
  const FavoriteIcon = isFavorite ? MdOutlineFavorite : MdOutlineFavoriteBorder;

  return (
    <Container $cutSongName={cutSongName} $hasLikedSong={isFavorite}>
      <div className="album-image">
        {/* hide if image is not loaded */}
        {currentSong.albumImage && (
          <a href={currentSong.albumUrl}>
            <img
              alt="Song Cover"
              draggable="false"
              src={currentSong.albumImage}
            />
          </a>
        )}

        <button type="button">
          <SlArrowUp />
        </button>
      </div>

      <div className="album-info">
        <a href="#">{currentSong.name}</a>
        <div className="artists">
          <ArtistNames artists={currentSong.artists} />
        </div>
      </div>

      <button
        data-tooltip-content={
          isFavorite ? 'Remover da sua biblioteca' : 'Salvar na sua biblioteca'
        }
        onClick={() => setIsFavorite(!isFavorite)}
        type="button"
      >
        <FavoriteIcon />
      </button>
    </Container>
  );
}
