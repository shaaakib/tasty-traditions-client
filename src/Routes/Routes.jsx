import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import ErrorPage from '../Pages/Shared/ErrorPage/ErrorPage';
import Chefs from '../Pages/Home/Chefs/Chefs';

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
        path: '/chef/',
        element: <Chefs />,
        loader: () => fetch('http://localhost:5000/chef/'),
      },
    ],
  },
]);

export default router;
