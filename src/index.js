import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Just from './App';

let Km=Just
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Km />
  </StrictMode>
);
