import loadable from '@loadable/component';

import {
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default.ts';

const Layout = loadable(() => import('./layout'));
const GlobalStyles = loadable(() => import('./styles/GlobalStyles'));

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

Object.keys(ROUTES).forEach((route) => {
  const Element = loadable(() => import(/* @vite-ignore */ route));

  const path = route
    .replace(/\/src\/routes|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1');

  routes[0].children?.push({
    path,
    element: <Element />,
  });
});

const router = createBrowserRouter(routes);

export default function FilesystemRouter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
