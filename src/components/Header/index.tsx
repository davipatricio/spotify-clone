import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { AccountButtons, Container, NavigationButtons } from './styles';

export default function Header() {
  return (
    <Container>
      <NavigationButtons>
        <button type="button">
          <SlArrowLeft />
        </button>
        <button type="button" disabled>
          <SlArrowRight />
        </button>
      </NavigationButtons>

      <AccountButtons>
        <button type="button"></button>
        <button type="button"></button>
      </AccountButtons>
    </Container>
  );
}
