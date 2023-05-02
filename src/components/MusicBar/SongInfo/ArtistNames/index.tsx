import { Fragment } from 'react';

interface ArtistNamesProps {
  artists: string[];
}

export default function ArtistNames({ artists }: ArtistNamesProps) {
  return (
    <>
      {artists.map((artist, index) => {
        const isLastArtist = index === artists.length - 1;

        return (
          <Fragment key={artist}>
            <a href="#">{artist}</a>
            {/* Add a comma to separate artists */}
            {isLastArtist ? null : <span>, </span>}
          </Fragment>
        );
      })}
    </>
  );
}
