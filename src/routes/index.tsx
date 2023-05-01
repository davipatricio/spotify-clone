import PlaylistSmallCard from '../components/PlaylistSmallCard';
import { PlaylistContainer } from './index.css';

export default function Index() {
  return (
    <PlaylistContainer>
      <PlaylistSmallCard name="K-pop" image="https://via.placeholder.com/150" url="#" />
      <PlaylistSmallCard name="Popular Trap" image="https://via.placeholder.com/150" url="#" />
      <PlaylistSmallCard name="EDM" image="https://via.placeholder.com/150" url="#" />
      <PlaylistSmallCard name="Lo-fi" image="https://via.placeholder.com/150" url="#" />
      <PlaylistSmallCard name="International Pop" image="https://via.placeholder.com/150" url="#" />
    </PlaylistContainer>
  );
}
