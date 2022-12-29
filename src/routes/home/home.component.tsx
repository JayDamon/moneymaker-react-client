import { Typography } from "@mui/material"
import { Box } from "@mui/system";
import Header from "../header/header.component";

const Home = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <Header enableSidebar={false} />
      <span>Welcome to MoneyMaker!</span>
    </Box>
  );
}

export default Home;