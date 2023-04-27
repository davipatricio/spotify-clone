import { useState } from 'react';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { Container } from './styles';
import ArtistNames from '../ArtistNames';
import { SlArrowUp } from 'react-icons/sl';
import { useCurrentSong } from '../../../hooks/currentSong';

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
              src={currentSong.albumImage}
              alt="Song Cover"
              draggable="false"
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
        onClick={() => setIsFavorite(!isFavorite)}
        type="button"
        data-tooltip-content={
          isFavorite ? 'Remover da sua biblioteca' : 'Salvar na sua biblioteca'
        }
      >
        <FavoriteIcon />
      </button>
    </Container>
  );
}
