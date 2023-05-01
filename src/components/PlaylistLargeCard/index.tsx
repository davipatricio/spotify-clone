import PlayButton from '../PlayButton';
import { Container } from './styles';

interface PlaylistLargeCardProps {
  image: string;
  name: string;
  description: string;
  url: string;
}

export default function PlaylistLargeCard({
  image,
  name,
  description,
  url,
}: PlaylistLargeCardProps) {
  return (
    <Container href={url}>
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
