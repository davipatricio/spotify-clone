import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/GlobalStyles.ts';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout.tsx';
import Index from './routes/index.tsx';

import 'react-tooltip/dist/react-tooltip.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.querySelector('body')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <GlobalStyles />
        <RouterProvider router={router} />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);
