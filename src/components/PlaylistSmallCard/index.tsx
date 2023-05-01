import { MdPlayArrow } from 'react-icons/md';
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

      <button type="button">
        <MdPlayArrow />
      </button>
    </Container>
  );
}
