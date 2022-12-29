import { Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { FC, useContext } from "react";
import { DrawerContext, DrawerContextType } from "../../contexts/drawer.context";

import { AppBar } from './header.styles'
import { PermIdentity } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import { UserContext, UserContextType } from "../../contexts/user.context";

export type HeaderProps = {
  enableSidebar?: boolean
}

const Header = ({ enableSidebar = true }: HeaderProps) => {

  const { isDrawerOpen, setIsDrawerOpen } = useContext(DrawerContext) as DrawerContextType;

  if (!enableSidebar) {
    setIsDrawerOpen(false);
  }

  const { keycloak } = useKeycloak();
  const isLoggedIn = keycloak.authenticated;

  const handleDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  const navigate = useNavigate();

  const { isUserOptionsOpen, setIsUserOptionsOpen } = useContext(UserContext) as UserContextType;
  const userAction = () => {
    if (isLoggedIn) {
      setIsUserOptionsOpen(!isUserOptionsOpen);
    } else {
      keycloak.login()
    }
  }

  return (
    <AppBar position="fixed" open={isDrawerOpen}>
      <Toolbar>
        {(enableSidebar && <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(isDrawerOpen && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        )}
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Money Maker
        </Typography>
        <Button color="inherit" onClick={userAction}>
          {(isLoggedIn ? <PermIdentity /> : <span>Login</span>)}
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header;