import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import ErrorPage from '../Pages/Shared/ErrorPage/ErrorPage';
import Shefs from '../Pages/Home/Shefs/Shefs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'shef',
        element: <Shefs />,
      },
    ],
  },
]);

export default router;
