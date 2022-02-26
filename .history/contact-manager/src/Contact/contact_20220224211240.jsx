import React from "react";
import AppBar from "@mui/material/AppBar";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import TextField from "@mui/material/TextField";
import HomeIcon from "@mui/icons-material/Home";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import InfoIcon from "@mui/icons-material/Info";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";

import TemporaryDrawer from "../components/TemporaryDrawer/TemporaryDrawer";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Yvonne Onuorah
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();
function Contact() {
  const tim = useTheme();
  const [progress, setProgress] = React.useState(0);
  console.log(progress);

  const [users, setUsers] = React.useState([]);

  function getData() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }

  React.useEffect(() => {
    console.log("user" + users);
    getData();

    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  const matches = useMediaQuery(tim.breakpoints.down("sm"));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar
          sx={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#e9ecef",
          }}
        >
          <Grid container maxWidth="lg" spacing={2}>
            <Grid item xs={10}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                  Contact Manager
                </Typography>
              </Box>
            </Grid>

            {matches ? (
              <>
                <Grid item xs={2}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",

                      justifyContent: "flex-end",
                      height: "100%",
                    }}
                  >
                    <TemporaryDrawer />
                  </Box>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={2}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",

                      justifyContent: "flex-end",
                    }}
                  >
                    <Stack direction="row" spacing={2}>
                      <Link
                        href="https://www.linkedin.com/in/yvonne-onuorah-924030155/"
                        color="inherit"
                        underline="hover"
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          "&:hover": {
                            color: "white",
                            opacity: [0.9, 0.8, 0.7],
                          },
                        }}
                      >
                        <HomeIcon />
                        <Typography>Home</Typography>
                      </Link>

                      <Link
                        href="https://github.com/yvonneonu"
                        color="inherit"
                        underline="hover"
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          "&:hover": {
                            color: "white",
                            opacity: [0.9, 0.8, 0.7],
                          },
                        }}
                      >
                        <AddBoxIcon />
                        <Typography>Add</Typography>
                      </Link>

                      <Link
                        href="https://www.linkedin.com/in/yvonne-onuorah-924030155/"
                        color="inherit"
                        underline="hover"
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          "&:hover": {
                            color: "white",
                            opacity: [0.9, 0.8, 0.7],
                          },
                        }}
                      >
                        <InfoIcon />
                        <Typography>About</Typography>
                      </Link>
                    </Stack>
                  </Box>
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Container maxWidth="lg">
          <Grid
            direction={matches ? "column-reverse" : "row"}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              sx={{
                backgroundColor: "#e9ecef",
                borderRadius: "0.3rem",
                marginBottom: "2rem",
                padding: "2rem 1rem",
                marginTop: "15px",
              }}
            >
              <Stack spacing={2}>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      marginTop: "15px",
                    }}
                  >
                    Contact Manager
                  </Typography>

                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold", right: "55px" }}
                  >
                    This is a portfolio project to showcase knowledge of:{" "}
                    <List
                      sx={{
                        width: "100%",
                      }}
                    >
                      {[
                        "i.   React Components and JSX.",
                        "ii.  React Router.",
                        "iii. Component state management.",
                        "iv.  Context api for global state management.",
                        "v.   Making asynchronous calls to the Json placeholder fake rest api using async/await.",
                      ].map((value) => (
                        <ListItem key={value} disableGutters>
                          <ListItemText primary={` ${value}`} />
                        </ListItem>
                      ))}
                    </List>
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            {users.map((user) => (
              <Container
                maxWidth="md"
                item
                key={user}
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: "50px",
                  marginTop: "50px",
                }}
              >
                <Grid
                  xs={10}
                  sx={{
                    display: "flex",
                    flexDirection: "row",

                    backgroundColor: "blue",
                  }}
                >
                  <Typography sx={{alignItem: "center", }}>
                    {user.name}{" "}
                    <KeyboardDoubleArrowDownIcon sx={{ color: "red" }} />
                  </Typography>
                </Grid>

                <Grid xs={2}>
                  <InfoIcon />
                  <InfoIcon />
                </Grid>
              </Container>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default Contact;
