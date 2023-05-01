import PlayButton from '../PlayButton';
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

        <PlayButton $animated $smooth $hidden />
      </div>
      <p>{name}</p>
      <span>{description}</span>
    </Container>
  );
}
