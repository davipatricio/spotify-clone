import loadable from '@loadable/component';
import styled from 'styled-components';

const Header = loadable(async () => import('./components/Header'));
const LateralNavbar = loadable(async () => import('./components/LaternalNavbar'));
const MusicBar = loadable(async () => import('./components/MusicBar'));

const Root = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  > main {
    position: relative;
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
        {children}
      </Main>

      <MusicBar />
    </Root>
  );
}
