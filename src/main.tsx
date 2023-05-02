import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import FilesystemRouter from './FilesystemRouter.tsx';
import Layout from './layout.tsx';
import GlobalStyles from './styles/GlobalStyles.ts';
import { defaultTheme } from './styles/themes/default';

import 'react-tooltip/dist/react-tooltip.css';

ReactDOM.createRoot(document.querySelector('body') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <GlobalStyles />
        <FilesystemRouter />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);
