import { Button } from "@mui/material";
import React from "react";
import PlaidLink from "../../components/plaid-link/plaid-link.component";

const Plaid = () => {

  // const startLink = () => {
  //   performLink();
  // }

  return (
    <div>
      <span>Plaid integration</span>
      <PlaidLink />
      <br />
      {/* <Button variant="text" onClick={startLink}>Add Account</Button> */}
    </div >
  )
}

export default Plaid;