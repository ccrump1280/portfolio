import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Root from './routes/root'
import About from './routes/about'
import Contact from './routes/contact'
import Project from './routes/project'
import ErrorPage from './error-page'

const theme = createTheme();
theme.typography.fontFamily = 'Lato';
theme.typography.body1.margin = '16px';
 

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
  {
    path: "contact/",
    element: <Contact />,
    errorElement: <ErrorPage />
  },
  {
    path: "project/:projectId",
    element: <Project />,
    errorElement: <ErrorPage />,
  }
]);

export const CategoryContext = React.createContext(null);

const App = () => {
  const [category, setCategory] = useState('recent');

  return (
    <React.StrictMode>
      <ThemeProvider theme={ theme }>
        <CategoryContext.Provider value={{ category: category, setCategory: setCategory}}>
          <RouterProvider router = {router}/>
        </CategoryContext.Provider>
      </ThemeProvider>
    </React.StrictMode>
  )
};


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
