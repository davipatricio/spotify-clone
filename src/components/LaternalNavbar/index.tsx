import { useCallback, useEffect, useRef } from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import { MdOutlineSearch } from 'react-icons/md';
import { VscLibrary } from 'react-icons/vsc';
import { Container, Divider, LibraryLinks } from './styles';

export default function LateralNavbar() {
  const library = useRef<HTMLDivElement>(null);
  const resizable = useRef<HTMLSpanElement>(null);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (e.clientX < 220 || e.clientX > 280) return;
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
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          alt="spotify logo"
          draggable="false"
        />
        <LibraryLinks>
          <a href="#">
            <HiOutlineHome />
            <span>Início</span>
          </a>

          <a href="#">
            <MdOutlineSearch />
            <span>Buscar</span>
          </a>

          <a href="#">
            <VscLibrary />
            <span>Sua Biblioteca</span>
          </a>
        </LibraryLinks>

        <Divider />
      </section>

      <span className="resizer" ref={resizable} />
    </Container>
  );
}
