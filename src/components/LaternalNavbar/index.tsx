import { useCallback, useEffect, useRef } from 'react';
import { HiHeart, HiOutlineHome } from 'react-icons/hi';
import { MdAdd, MdBookmark, MdOutlineSearch } from 'react-icons/md';
import { VscLibrary } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { Container, Divider, LibraryActions, UserLibraryLinks } from './styles';

const LateralNavbar = () => {
  const library = useRef<HTMLDivElement>(null);
  const resizable = useRef<HTMLSpanElement>(null);

  const resize = useCallback(
    (evt: MouseEvent) => {
      if (evt.clientX < 155 || evt.clientX > 280) return;
      if (library.current) library.current.style.width = `${evt.clientX}px`;
    },
    [library]
  );

  const stopResize = useCallback(
    () => window.removeEventListener('mousemove', resize),
    [resize]
  );

  useEffect(() => {
    const resizableCopy = resizable.current;
    if (!resizableCopy) return;

    const handler = (evt: MouseEvent) => {
      evt.preventDefault();
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResize);
    };

    resizableCopy.addEventListener('mousedown', handler);

    return () => resizableCopy.removeEventListener('mousedown', handler);
  }, [resizable, resize, stopResize]);

  return (
    <Container>
      <section className="library" ref={library}>
        <Link to="/">
          <img
            alt="spotify logo"
            draggable="false"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          />
        </Link>

        <UserLibraryLinks>
          <Link to="/">
            <HiOutlineHome />
            <span>Início</span>
          </Link>

          <Link to="#">
            <MdOutlineSearch />
            <span>Buscar</span>
          </Link>

          <Link to="#">
            <VscLibrary />
            <span>Sua Biblioteca</span>
          </Link>
        </UserLibraryLinks>

        <LibraryActions>
          <Link className="create-playlist" to="#">
            <MdAdd />
            <span>Criar playlist</span>
          </Link>
          <Link className="liked" to="#">
            <HiHeart />
            <span>Músicas Curtidas</span>
          </Link>
          <Link className="podcasts" to="#">
            <MdBookmark />
            <span>Seus episódios</span>
          </Link>
        </LibraryActions>

        <Divider />
      </section>

      <span className="resizer" ref={resizable} />
    </Container>
  );
};

export default LateralNavbar;
