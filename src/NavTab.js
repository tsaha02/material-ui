import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import React, { useState } from "react";

function NavTab() {
  const [value, setValue] = useState(undefined);
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Tabs
            value={value}
            indicatorColor="secondary"
            textColor="secondary"
            onChange={(e, val) => setValue(val)}
          >
            <Tab
              label="Tab-1"
              textColor="primary"
              sx={{ background: "yellow" }}
            >
              Tab-1
            </Tab>
            <Tab label="Tab-2" textColor="primary">
              Tab-2
            </Tab>
            <Tab label="Tab-3" textColor="secondary">
              Tab-3
            </Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavTab;
