import { RouterProvider, createBrowserRouter } from 'react-router-dom';

type IRoutes = Record<string, { default: () => JSX.Element }>;

const ROUTES: IRoutes = import.meta.glob('/src/routes/**/[a-z[]*.tsx', {
  eager: true,
});

const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\/src\/routes|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1');

  const Element = ROUTES[route].default;

  return { path, element: <Element /> };
});

const router = createBrowserRouter(routes);

export default function FilesystemRouter() {
  return <RouterProvider router={router} />;
}
