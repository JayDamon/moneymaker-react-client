import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useContext } from "react";
import { DrawerContext, DrawerContextType } from "../../contexts/drawer.context";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DrawerHeader } from "../drawer-header/drawer-header.component";

const drawerWidth = 240;

const SidebarComponent = () => {

  const { isDrawerOpen, setIsDrawerOpen } = useContext(DrawerContext) as DrawerContextType;
  const theme = useTheme();

  const handleDrawerClose = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={isDrawerOpen}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {['Home', 'Accounts', 'Transactions', 'Budget'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key='Add Account' disablePadding>
          <ListItemButton>
            <ListItemText primary='Add Account' />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SidebarComponent;