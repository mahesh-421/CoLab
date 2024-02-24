import Body from './components/Body';
import SignUp from './components/SignUp';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <SignUp />,
      },
      {
        path: '/Body',
        element: <Body />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
