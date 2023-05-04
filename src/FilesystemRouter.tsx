import loadable from '@loadable/component';
import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default.ts';

const Layout = loadable(async () => import('./layout'));
const GlobalStyles = loadable(async () => import('./styles/GlobalStyles'));

const ROUTES = import.meta.glob('/src/routes/**/[a-z[]*.tsx', {
  eager: false,
}) as Record<string, () => Promise<{ default(): JSX.Element }>>;

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
  const Element = lazy(ROUTES[route]);

  const path = route
    .replaceAll(/\/src\/routes|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+]/, '*')
    .replace(/\[(?<ext>.+)]/, ':$1');

  routes[0].children?.push({
    path,
    element: (
      <Suspense fallback={null} >
        <Element />
      </Suspense>
    ),
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
