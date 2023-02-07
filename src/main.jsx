import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Root from './routes/root'
import About from './routes/about'
import ErrorPage from './error-page'

const theme = createTheme();
theme.typography.fontFamily = 'Lato';
theme.typography.body1.margin = '1rem 1rem';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "about/",
    element: <About />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <RouterProvider router = {router} />
    </ThemeProvider>
  </React.StrictMode>,
)
