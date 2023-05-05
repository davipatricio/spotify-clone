import { MdMoreHoriz } from 'react-icons/md';
import PlayButton from '../../components/PlayButton';
import { Header, PlaySection, PlaylistInfo } from './index.css';

export default function Playlist() {
  // const { id } = useParams();

  return (
    <>
      <Header>
        <img
          alt="Daily Mix 4"
          draggable="false"
          src="https://placehold.co/164/EEE/31343C?font=oswald&text=Daily+Mix+4"
        />

        <div>
          <h6>Playlist</h6>
          <h1>Daily Mix 4</h1>
          <span>Red Velvet, BLACKPINK, TWICE e mais</span>

          <PlaylistInfo>
            <img
              alt="Spotify"
              src="https://cdn.worldvectorlogo.com/logos/spotify-2.svg"
            />
            <a href="https://open.spotify.com/user/spotify">Spotify</a>
            <span>50 músicas,</span>
            <span className="duration">cerca de 2h 45min</span>
          </PlaylistInfo>
        </div>
      </Header>

      <PlaySection>
        <PlayButton $smooth />
        <MdMoreHoriz />
      </PlaySection>
    </>
  );
}
