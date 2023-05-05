import { useEffect, useRef } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { AccountButtons, Container, NavigationButtons } from './styles';

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = document.querySelector(
      'body > div > main'
    ) as HTMLDivElement;

    // When the user scrolls the main element (where the content is), move the header
    const handleScroll = () => {
      if (headerRef.current)
        headerRef.current.style.top = `${element.scrollTop}px`;
    };

    element.addEventListener('scroll', handleScroll);

    return () => element.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container ref={headerRef}>
      <NavigationButtons>
        <button type="button">
          <SlArrowLeft />
        </button>
        <button disabled type="button">
          <SlArrowRight />
        </button>
      </NavigationButtons>

      <AccountButtons>
        <button type="button" />
        <button type="button" />
      </AccountButtons>
    </Container>
  );
}
