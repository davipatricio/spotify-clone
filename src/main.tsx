import React from 'react';
import ReactDOM from 'react-dom/client';
import FilesystemRouter from './FilesystemRouter';

import 'react-tooltip/dist/react-tooltip.css';

ReactDOM.createRoot(document.querySelector('body') as HTMLElement).render(
  <React.StrictMode>
    <FilesystemRouter />
  </React.StrictMode>
);
