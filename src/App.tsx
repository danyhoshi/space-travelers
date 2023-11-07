import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import Rockets from './components/Rockets';
import Dragons from './components/Dragons';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

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


const App = () => {
    return(
        <RouterProvider router={router} />
    )
}

export default App
