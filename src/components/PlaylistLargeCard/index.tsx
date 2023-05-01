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
      <img
        src={image}
        draggable={false}
        alt={`Album cover for playlist ${name}`}
      />
      <p>{name}</p>
      <span>{description}</span>
    </Container>
  );
}
