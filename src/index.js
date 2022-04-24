import React from "react";
import App from "./App";
import { ThemeProvider } from "./context";
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
