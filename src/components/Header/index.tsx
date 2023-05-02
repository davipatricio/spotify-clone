import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { AccountButtons, Container, NavigationButtons } from './styles';

export default function Header() {
  return (
    <Container>
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
