import PlaylistCard from '../components/PlaylistCard';
import { PlaylistContainer } from './index.css';

export default function Index() {
  const dayPeriod = () => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) return 'Bom dia';
    if (hour >= 12 && hour < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  return (
    <>
      <PlaylistContainer $minWidth={360}>
        <h2>{dayPeriod()}</h2>

        <PlaylistCard
          name="K-pop"
          image="https://placehold.co/164/green/white"
          url="#"
          variant="small"
        />
        <PlaylistCard
          name="Popular Trap"
          image="https://placehold.co/164/orange/white"
          url="#"
          variant="small"
        />
        <PlaylistCard
          name="EDM"
          image="https://placehold.co/164/purple/white"
          url="#"
          variant="small"
        />
        <PlaylistCard
          name="Lo-fi"
          image="https://placehold.co/164/blue/white"
          url="#"
          variant="small"
        />
        <PlaylistCard
          name="International Pop"
          image="https://placehold.co/164/darkgrey/white"
          url="#"
          variant="small"
        />
      </PlaylistContainer>

<PlaylistContainer $minWidth={175}>
  <h2>Feito para você</h2>
  <PlaylistCard
    name="Descobertas da Semana"
    image="https://placehold.co/164/black/white"
    description="As músicas que você mais ouviu na última semana"
    url="#"
    variant="large"
  />
  <PlaylistCard
    name="Daily Mix 1"
    image="https://placehold.co/150/EEE/31343C?font=oswald&text=Daily+Mix+1"
    description="Lil Tecca, Don Toliver, Metro Boomin e mais"
    url="#"
    variant="large"
  />
  <PlaylistCard
    name="Daily Mix 2"
    image="https://placehold.co/150/EEE/31343C?font=oswald&text=Daily+Mix+2"
    description="DROELOE, NEFFEX, Lil Mosey e mais"
    url="#"
    variant="large"
  />
  <PlaylistCard
    name="Daily Mix 3"
    image="https://placehold.co/150/EEE/31343C?font=oswald&text=Daily+Mix+3"
    description="The Weeknd, Drake, Post Malone e mais"
    url="#"
    variant="large"
  />
</PlaylistContainer>

<PlaylistContainer $minWidth={175}>
  <h2>Feito para você</h2>
  <PlaylistCard
    name="Descobertas da Semana"
    image="https://placehold.co/164/black/white"
    description="As músicas que você mais ouviu na última semana"
    url="#"
    variant="large"
  />
  <PlaylistCard
    name="Daily Mix 1"
    image="https://placehold.co/150/EEE/31343C?font=oswald&text=Daily+Mix+1"
    description="Lil Tecca, Don Toliver, Metro Boomin e mais"
    url="#"
    variant="large"
  />
  <PlaylistCard
    name="Daily Mix 2"
    image="https://placehold.co/150/EEE/31343C?font=oswald&text=Daily+Mix+2"
    description="DROELOE, NEFFEX, Lil Mosey e mais"
    url="#"
    variant="large"
  />
  <PlaylistCard
    name="Daily Mix 3"
    image="https://placehold.co/150/EEE/31343C?font=oswald&text=Daily+Mix+3"
    description="The Weeknd, Drake, Post Malone e mais"
    url="#"
    variant="large"
  />
</PlaylistContainer>

<PlaylistContainer $minWidth={175}>
  <h2>Feito para você</h2>
  <PlaylistCard
    name="Descobertas da Semana"
    image="https://placehold.co/164/black/white"
    description="As músicas que você mais ouviu na última semana"
    url="#"
    variant="large"
  />
  <PlaylistCard
    name="Daily Mix 1"
    image="https://placehold.co/150/EEE/31343C?font=oswald&text=Daily+Mix+1"
    description="Lil Tecca, Don Toliver, Metro Boomin e mais"
    url="#"
    variant="large"
  />
  <PlaylistCard
    name="Daily Mix 2"
    image="https://placehold.co/150/EEE/31343C?font=oswald&text=Daily+Mix+2"
    description="DROELOE, NEFFEX, Lil Mosey e mais"
    url="#"
    variant="large"
  />
  <PlaylistCard
    name="Daily Mix 3"
    image="https://placehold.co/150/EEE/31343C?font=oswald&text=Daily+Mix+3"
    description="The Weeknd, Drake, Post Malone e mais"
    url="#"
    variant="large"
  />
</PlaylistContainer>
    </>
  );
}
