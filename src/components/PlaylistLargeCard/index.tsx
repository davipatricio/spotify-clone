import { MdPlayArrow } from 'react-icons/md';
import { Container } from './styles';

interface PlaylistLargeCardProps {
  image: string;
  name: string;
  description: string;
}

export default function PlaylistLargeCard({
  image,
  name,
  description,
}: PlaylistLargeCardProps) {
  return (
    <Container>
      <div>
        <img
          src={image}
          draggable={false}
          alt={`Album cover for playlist ${name}`}
        />

        <button type="button">
          <MdPlayArrow />
        </button>
      </div>
      <p>{name}</p>
      <span>{description}</span>
    </Container>
  );
}
