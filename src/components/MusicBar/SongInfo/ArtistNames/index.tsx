interface ArtistNamesProps {
  artists: string[];
}

export default function ArtistNames({ artists }: ArtistNamesProps) {
  return (
    <>
      {artists.map((artist, index) => {
        const isLastArtist = index === artists.length - 1;

        return (
          <>
            <a href="#">{artist}</a>
            {/* Add a comma to separate artists */}
            {!isLastArtist ? <span>, </span> : null}
          </>
        );
      })}
    </>
  );
}
