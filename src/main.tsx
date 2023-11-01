import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import Rockets from './components/Rockets';
import Dragons from './components/Dragons';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store.tsx';

const NavbarWrapper = () => {
  return(
    <>
      <MyNavbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <Rockets />,
      },
      {
        path: "/dragons",
        element: <Dragons />,
      },
      {
        path: "/missions",
        element: <Missions />,
      },
      {
        path: "/myprofile",
        element: <MyProfile />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={setupStore()}>
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
