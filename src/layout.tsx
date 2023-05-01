import styled from 'styled-components';
import Header from './components/Header';
import LateralNavbar from './components/LaternalNavbar';
import MusicBar from './components/MusicBar';

const Root = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  main > #content {
    padding: 0 2rem;
  }

  /* Music bar */
  > footer {
    /* Make music bar use the entire grid */
    grid-column: 1 / 3;
  }
`;

const Main = styled.main`
  overflow-y: scroll;
  height: calc(100vh - 90px);
`;

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <Root>
      <LateralNavbar />

      <Main>
        <Header />
        <div id="content">{children}</div>
      </Main>

      <MusicBar />
    </Root>
  );
}
