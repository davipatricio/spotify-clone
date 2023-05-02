import { Header } from './index.css';

export default function Playlist() {
  // const { id } = useParams();

  return (
    <>
      <Header>
        <img
          draggable="false"
          alt="Daily Mix 4"
          src="https://placehold.co/164/EEE/31343C?font=oswald&text=Daily+Mix+4"
        />
        <div>
          <h6>Playlist</h6>
          <h1>Daily Mix 4</h1>
          <span>Red Velvet, BLACKPINK, TWICE e mais</span>
        </div>
      </Header>
    </>
  );
}
