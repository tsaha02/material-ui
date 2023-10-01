import { MenuList, Menu, Button } from "@mui/material";
import React, { useState } from "react";

function MuiMenu() {
  const [anchorElement, setAnchorElement] = useState(null);
  const [open, setOpen] = useState(false);
  const handelClose = () => {
    setAnchorElement(null);
    setOpen(false);
  };
  const handelOpen = (e) => {
    setAnchorElement(e.currentTarget);
    setOpen(true);
  };

  return (
    <div>
      <Button variant="contained" onClick={handelOpen}>
        Menu
      </Button>
      <Menu anchorEl={anchorElement} open={open} onClose={handelClose}>
        <MenuList onClick={handelClose} sx={{ cursor: "pointer" }}>
          Profile
        </MenuList>
        <MenuList onClick={handelClose} sx={{ cursor: "pointer" }}>
          About
        </MenuList>
        <MenuList onClick={handelClose} sx={{ cursor: "pointer" }}>
          Contact
        </MenuList>
      </Menu>
    </div>
  );
}

export default MuiMenu;
