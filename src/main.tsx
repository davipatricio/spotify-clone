import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from './styles/GlobalStyles.ts';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';

import 'react-tooltip/dist/react-tooltip.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
