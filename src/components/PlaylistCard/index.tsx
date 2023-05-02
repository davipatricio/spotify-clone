import PlayButton from '../PlayButton';
import { LargeContainer, SmallContainer } from './styles';

interface PlaylistCardProps {
  description?: string;
  image: string;
  name: string;
  url: string;
  variant: 'large' | 'small';
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
            alt={`Album cover for playlist ${name}`}
            draggable={false}
            src={image}
          />
          <p>{name}</p>

          <PlayButton $hidden $smooth />
        </>
      ) : (
        <>
          <div>
            <img
              alt={`Album cover for playlist ${name}`}
              draggable={false}
              src={image}
            />

            <PlayButton $animated $hidden $smooth />
          </div>
          <p>{name}</p>
          <span>{description}</span>
        </>
      )}
    </Container>
  );
}
