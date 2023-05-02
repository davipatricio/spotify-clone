import { useCallback, useEffect, useRef } from 'react';
import { HiHeart, HiOutlineHome } from 'react-icons/hi';
import { MdAdd, MdBookmark, MdOutlineSearch } from 'react-icons/md';
import { VscLibrary } from 'react-icons/vsc';
import { Container, Divider, LibraryActions, UserLibraryLinks } from './styles';
import { Link } from 'react-router-dom';

const LateralNavbar = () => {
  const library = useRef<HTMLDivElement>(null);
  const resizable = useRef<HTMLSpanElement>(null);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (e.clientX < 155 || e.clientX > 280) return;
      if (library.current) library.current.style.width = `${e.clientX}px`;
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

    resizableCopy.addEventListener('mousedown', (e) => {
      e.preventDefault();
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResize);
    });

    return () => {
      resizableCopy.removeEventListener('mousedown', (e) => {
        e.preventDefault();
        window.removeEventListener('mousemove', resize);
        window.removeEventListener('mouseup', stopResize);
      });
    };
  }, [resizable, resize, stopResize]);

  return (
    <Container>
      <section className="library" ref={library}>
        <Link to="/">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="spotify logo"
            draggable="false"
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
          <Link to="#" className="create-playlist">
            <MdAdd />
            <span>Criar playlist</span>
          </Link>
          <Link to="#" className="liked">
            <HiHeart />
            <span>Músicas Curtidas</span>
          </Link>
          <Link to="#" className="podcasts">
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
