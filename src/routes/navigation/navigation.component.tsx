import { Box } from '@mui/material';
import { DrawerHeader } from '../../components/drawer-header/drawer-header.component';
import SidebarComponent from '../../components/sidebar/sidebar.component';
import Header from '../header/header.component';
import './navigation.styles'
import { Main } from './navigation.styles';
import { DrawerContext, DrawerContextType } from "../../contexts/drawer.context";
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Plaid from '../plaid/plaid.component';
import SecuredHome from '../secured-home/secured-home.component';
import { UserContext, UserContextType } from '../../contexts/user.context';
import UserDropdown from '../../components/user-options/user-dropdown.component';

const Navigation = () => {

  const { isDrawerOpen } = useContext(DrawerContext) as DrawerContextType;
  const { isUserOptionsOpen } = useContext(UserContext) as UserContextType;

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <SidebarComponent />
      <Main open={isDrawerOpen}>
        <div>
          <DrawerHeader />
          {isUserOptionsOpen && <UserDropdown />}
          <Routes>
            <Route index element={<SecuredHome />} />
            <Route path="/add-account" element={<Plaid />} />

          </Routes>
        </div>
      </Main>
    </Box>
  );
};

export default Navigation;