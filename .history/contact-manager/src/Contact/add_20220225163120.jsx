import React from "react";
import AppBar from "@mui/material/AppBar";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import TextField from "@mui/material/TextField";
import Accordion from "../components/Accordion";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";

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
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const theme = createTheme();
function AddContact() {
  const tim = useTheme();
  const [progress, setProgress] = React.useState(0);
  console.log(progress);

  const [users, setUsers] = React.useState([]);

  function getData() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => {
        setUsers(() =>
          json.map((element) => ({
            ...element,
          }))
        );
      });
  }

  React.useEffect(() => {
    console.log(users);
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
                        href="/"
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
                        href="/AddContact"
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
                        href="#"
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
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "bold",

                      marginTop: "10px",
                    }}
                  >
                    Add Contact
                  </Typography>

                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      marginTop: "10px",
                    }}
                  >
                    Name{" "}
                  </Typography>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": {
                        m: 1,
                        width: "100%",
                        backgroundColor: "white",
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Enter your name..."
                      variant="outlined"
                    />
                  </Box>

                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      marginTop: "10px",
                    }}
                  >
                    Email{" "}
                  </Typography>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": {
                        m: 1,
                        width: "100%",
                        backgroundColor: "white",
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Enter your email..."
                      variant="outlined"
                    />
                  </Box>

                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      marginTop: "10px",
                    }}
                  >
                    Phone{" "}
                  </Typography>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": {
                        m: 1,
                        width: "100%",
                        backgroundColor: "white",
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Enter your phone..."
                      variant="outlined"
                    />
                  </Box>
<Box></Box>
                  <Stack direction="row" spacing={2}>
      <Button variant="outlined" >
        Delete
      </Button>
                </Box>
              </Stack>
            </Grid>
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

export default AddContact;
