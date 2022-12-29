import { Button } from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";
import { UserDropdownContainer } from "./user-dropdownstyles";

const UserDropdown = () => {

  const { keycloak } = useKeycloak();

  const logout = () => {
    keycloak.logout();
  }

  return (
    <UserDropdownContainer>
      <Button onClick={logout}>Logout</Button>
    </UserDropdownContainer>
  );
};

export default UserDropdown;