import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useContext } from "react";
import { DrawerContext, DrawerContextType } from "../../contexts/drawer.context";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DrawerHeader } from "../drawer-header/drawer-header.component";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;



const SidebarComponent = () => {

  const { isDrawerOpen, setIsDrawerOpen } = useContext(DrawerContext) as DrawerContextType;
  const theme = useTheme();
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  const sideBarButtons = [
    {
      displayText: "Home",
      onClickHandler: () => {
        navigate("/")
      }
    },
    {
      displayText: "Accounts",
      onClickHandler: () => {
        navigate("/accounts")
      }
    },
    {
      displayText: "Transactions",
      onClickHandler: () => {
        navigate("/transactions")
      }
    },
    {
      displayText: "Budget",
      onClickHandler: () => {
        navigate("/budgets")
      }
    },
    {
      displayText: "Add Account",
      onClickHandler: () => {
        navigate("/add-account")
      }
    }
  ]



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
        {sideBarButtons.map((val, index) => (
          <ListItem key={val.displayText} disablePadding>
            <ListItemButton onClick={val.onClickHandler}>
              <ListItemText primary={val.displayText} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default SidebarComponent;