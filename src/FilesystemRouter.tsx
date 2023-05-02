import loadable from '@loadable/component';
import type { RouteObject } from 'react-router-dom';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default.ts';

const Layout = loadable(async () => import('./layout'));
const GlobalStyles = loadable(async () => import('./styles/GlobalStyles'));

const ROUTES = import.meta.glob('/src/routes/**/[a-z[]*.tsx', {
  eager: false,
});

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [],
  },
];

for (const route of Object.keys(ROUTES)) {
  // eslint-disable-next-line jsdoc/multiline-blocks, jsdoc/no-bad-blocks
  const Element = loadable(async () => import(/* @vite-ignore */ route));

  const path = route
    .replaceAll(/\/src\/routes|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+]/, '*')
    .replace(/\[(?<ext>.+)]/, ':$1');

  routes[0].children?.push({
    path,
    element: <Element />,
  });
}

const router = createBrowserRouter(routes);

export default function FilesystemRouter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
