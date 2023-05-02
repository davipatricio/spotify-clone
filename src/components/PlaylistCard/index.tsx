import PlayButton from '../PlayButton';
import { LargeContainer, SmallContainer } from './styles';

interface PlaylistCardProps {
  name: string;
  url: string;
  image: string;
  variant: 'small' | 'large';
  description?: string;
}

export default function PlaylistCard({
  name,
  url,
  image,
  description,
  variant,
}: PlaylistCardProps) {
  const Container = variant === 'small' ? SmallContainer : LargeContainer;

  return (
    <Container to={url}>
      {variant === 'small' ? (
        <>
          <img
            src={image}
            draggable={false}
            alt={`Album cover for playlist ${name}`}
          />
          <p>{name}</p>

          <PlayButton $smooth $hidden />
        </>
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
}
