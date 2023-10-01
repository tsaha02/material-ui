import {
  Button,
  Container,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
const menus = [
  "Profile",
  "About",
  "Contact.........................................",
];
function DrawerMui() {
  const [open, setOpen] = useState(false);
  return (
    <Container sx={{ background: "blue" }} maxWidth="xl">
      <Button variant="contained" onClick={() => setOpen(true)}>
        {" "}
        Drawer
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {menus.map((ele) => (
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary={ele} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}

export default DrawerMui;
