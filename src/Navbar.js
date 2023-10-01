import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <div>
      <AppBar variant="outlined">
        <Toolbar>
          <Typography>Navbar</Typography>
          <Typography>
            <Button color="warning">Login</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
