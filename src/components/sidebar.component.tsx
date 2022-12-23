import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const drawerWidth = 240;
const open = true;

const SidebarComponent = () => {
  return (
    <>
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
        open={open}
      >
        <div>Money Maker</div>
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
    </>
  )
}

export default SidebarComponent;