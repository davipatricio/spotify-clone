import loadable from '@loadable/component';
import { useMemo } from 'react';
import { PlaylistContainer } from './index.css';

const PlaylistCard = loadable(async () => import('../components/PlaylistCard'));

export default function Index() {
  const dayPeriod = useMemo(() => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) return 'Bom dia';
    if (hour >= 12 && hour < 18) return 'Boa tarde';
    return 'Boa noite';
  }, []);

  return (
    <>
      <PlaylistContainer $maxWidth="max-content" $minWidth={380}>
        <h2>{dayPeriod}</h2>

        <PlaylistCard
          image="https://placehold.co/164/green/white"
          name="K-pop"
          url="/playlist/cafebabe"
          variant="small"
        />
        <PlaylistCard
          image="https://placehold.co/164/orange/white"
          name="Popular Trap"
          url="/playlist/cafebabe"
          variant="small"
        />
        <PlaylistCard
          image="https://placehold.co/164/purple/white"
          name="EDM"
          url="/playlist/cafebabe"
          variant="small"
        />
        <PlaylistCard
          image="https://placehold.co/164/blue/white"
          name="Lo-fi"
          url="/playlist/cafebabe"
          variant="small"
        />
        <PlaylistCard
          image="https://placehold.co/164/darkgrey/white"
          name="International Pop"
          url="/playlist/cafebabe"
          variant="small"
        />
      </PlaylistContainer>

      <PlaylistContainer $maxWidth={196}>
        <h2>Feito para você</h2>
        <PlaylistCard
          description="As músicas que você mais ouviu na última semana"
          image="https://placehold.co/164/black/white"
          name="Descobertas da Semana"
          url="/playlist/cafebabe"
          variant="large"
        />
        <PlaylistCard
          description="Lil Tecca, Don Toliver, Metro Boomin e mais"
          image="https://placehold.co/150/EEE/31343C?font=oswald&text=Daily+Mix+1"
          name="Daily Mix 1"
          url="/playlist/cafebabe"
          variant="large"
        />
        <PlaylistCard
          description="DROELOE, NEFFEX, Lil Mosey e mais"
          image="https://placehold.co/150/EEE/31343C?font=oswald&text=Daily+Mix+2"
          name="Daily Mix 2"
          url="/playlist/cafebabe"
          variant="large"
        />
        <PlaylistCard
          description="The Weeknd, Drake, Post Malone e mais"
          image="https://placehold.co/150/EEE/31343C?font=oswald&text=Daily+Mix+3"
          name="Daily Mix 3"
          url="/playlist/cafebabe"
          variant="large"
        />
      </PlaylistContainer>
    </>
  );
}
