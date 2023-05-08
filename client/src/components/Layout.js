import { Outlet } from 'react-router-dom';
import Nav from './nav-component';
import Navbarmenu from './Navbarmenu';

const Layout = ({ currentUser, setCurrentUser }) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
