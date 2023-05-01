import PlaylistSmallCard from '../components/PlaylistSmallCard';
import { PlaylistContainer } from './index.css';

export default function Index() {
  const dayPeriod = () => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) return 'Bom dia';
    if (hour >= 12 && hour < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  return (
    <PlaylistContainer>
      <h2>{dayPeriod()}</h2>

      <PlaylistSmallCard
        name="K-pop"
        image="https://via.placeholder.com/150"
        url="#"
      />
      <PlaylistSmallCard
        name="Popular Trap"
        image="https://via.placeholder.com/150"
        url="#"
      />
      <PlaylistSmallCard
        name="EDM"
        image="https://via.placeholder.com/150"
        url="#"
      />
      <PlaylistSmallCard
        name="Lo-fi"
        image="https://via.placeholder.com/150"
        url="#"
      />
      <PlaylistSmallCard
        name="International Pop"
        image="https://via.placeholder.com/150"
        url="#"
      />
    </PlaylistContainer>
  );
}
