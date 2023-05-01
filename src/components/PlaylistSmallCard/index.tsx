import PlayButton from '../PlayButton';
import { Container } from './styles';

interface PlaylistSmallCardProps {
  image: string;
  name: string;
  url: string;
}

export default function PlaylistSmallCard({
  name,
  image,
  url,
}: PlaylistSmallCardProps) {
  return (
    <Container href={url}>
      <img
        src={image}
        draggable={false}
        alt={`Album cover for playlist ${name}`}
      />
      <span>{name}</span>

      <PlayButton $smooth $hidden />
    </Container>
  );
}
