import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import ErrorPage from '../Pages/Shared/ErrorPage/ErrorPage';
import Chefs from '../Pages/Home/Chefs/Chefs';
import ChefDetails from '../Pages/ChefDetails/ChefDetails';
import ChefLayout from '../Layouts/ChefLayout';
import Blog from '../Pages/Blog/Blog';
import About from '../Pages/About/About';
import Login from '../Pages/Login/Login/Login';
import Register from '../Pages/Login/Register/Register';
import PrivateRoute from './PrivateRoute';

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
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '/Blog/',
        element: <Blog />,
      },
      {
        path: '/about/',
        element: <About />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: 'chefdetails',
    element: <ChefLayout />,
    children: [
      {
        path: ':id',
        element: (
          <PrivateRoute>
            <ChefDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
    ],
  },
]);

export default router;
