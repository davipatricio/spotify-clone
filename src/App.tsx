import styled from 'styled-components';
import Header from './components/Header';
import LateralNavbar from './components/LaternalNavbar';
import MusicBar from './components/MusicBar';

const Root = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  > footer {
    grid-column: 1 / 3;
  }
`;

const Main = styled.main`
  overflow-y: scroll;
  height: calc(100vh - 90px);
`;

export default function App() {
  return (
    <Root>
      <LateralNavbar />

      <Main>
        <Header />
        <h1>Hello, world!</h1>
      </Main>
      <MusicBar />
    </Root>
  );
}
