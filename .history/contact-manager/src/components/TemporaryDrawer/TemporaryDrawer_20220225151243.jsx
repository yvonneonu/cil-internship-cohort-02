import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import HomeIcon from "@mui/icons-material/Home";

import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import InfoIcon from "@mui/icons-material/Info";

import ListItemText from "@mui/material/ListItemText";
import AddBoxIcon from "@mui/icons-material/AddBox";

import MenuIcon from "@mui/icons-material/Menu";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const IconChange = ({ name }) => {
    if (name === "Inbox") {
      return <InfoIcon />;
    } else if (name === "Starred") {
      return <AddBoxIcon />;
    } else {
      return <HomeIcon />;
    }
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <MenuIcon sx={{position: a}}/>
        {["Inbox", "Starred", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <IconChange name={text} />

            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
