import React from "react";
import AppBar from "@mui/material/AppBar";
// import Button from "@mui/material/Button";
// import CameraIcon from "@mui/icons-material/PhotoCamera";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CircularStatic from "../components/circularProgressWithLabel/CircularProgressWithLabel";
import HtmlIcon from "@mui/icons-material/Html";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
// import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import TemporaryDrawer from "../components/TemporaryDrawer/TemporaryDrawer.jsx";
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

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const matches = useMediaQuery(tim.breakpoints.down("sm"));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{ alignItems: "center", justifyContent: "center" }}>
          <Grid container maxWidth="lg" spacing={2}>
            <Grid item xs={2}>
              <Box>
                <Typography variant="h5" component="div">
                  Yvonne
                </Typography>
              </Box>
            </Grid>

            {matches ? (
              <>
                <Grid item xs={10}>
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
                <Grid item xs={7}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Link
                      href="#aboutme"
                      color="inherit"
                      underline="hover"
                      sx={{
                        marginRight: 2,
                        "&:hover": {
                          color: "red",
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    >
                      <Typography variant="body1" component="div">
                        About
                      </Typography>
                    </Link>

                    <Link
                      href="#Work"
                      hover="red"
                      color="inherit"
                      underline="hover"
                      sx={{
                        marginRight: 2,
                        "&:hover": {
                          color: "red",
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    >
                      <Typography variant="body1" component="div">
                        Service
                      </Typography>
                    </Link>

                    <Link
                      href="#writing"
                      color="inherit"
                      underline="hover"
                      sx={{
                        marginRight: 2,
                        "&:hover": {
                          color: "red",
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    >
                      <Typography variant="body1" component="div">
                        Writing
                      </Typography>
                    </Link>

                    <Link
                      href="#contact"
                      color="inherit"
                      underline="hover"
                      sx={{
                        marginRight: 2,
                        "&:hover": {
                          color: "red",
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    >
                      <Typography variant="body1" component="div">
                        Contact
                      </Typography>
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      underline="hover"
                      sx={{
                        marginRight: 2,
                        "&:hover": {
                          color: "red",
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    >
                      <Typography variant="body1" component="div">
                        Resume
                      </Typography>
                    </Link>
                  </Box>
                </Grid>

                <Grid item xs={3}>
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
                            color: "red",
                            opacity: [0.9, 0.8, 0.7],
                          },
                        }}
                      >
                        <LinkedInIcon />
                      </Link>

                      <Link
                        href="https://github.com/yvonneonu"
                        color="inherit"
                        underline="hover"
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          "&:hover": {
                            color: "red",
                            opacity: [0.9, 0.8, 0.7],
                          },
                        }}
                      >
                        <GitHubIcon />
                      </Link>

                      <Link
                        href="https://www.linkedin.com/in/yvonne-onuorah-924030155/"
                        color="inherit"
                        underline="hover"
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          "&:hover": {
                            color: "red",
                            opacity: [0.9, 0.8, 0.7],
                          },
                        }}
                      >
                        <TwitterIcon />
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
            spacing={2}
          >
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={
                    matches
                      ? { fontWeight: "bold", textAlign: "center" }
                      : { fontWeight: "bold" }
                  }
                >
                  A mobile and Web developer.
                </Typography>
                <Typography variant="h5" component="div">
                  Item 2
                </Typography>
                <Typography variant="h6" component="div">
                  Item 3
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  py: 4,
                  display: "flex",

                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  sx={{ width: "300px", height: "300px" }}
                  alt="Memy Sharp"
                  src="images/von.jpg"
                />
              </Box>
            </Grid>
          </Grid>

          <Grid px={2} id="Work" container spacing={2}>
            <Grid sx={{ mt: 5 }} item xs={12}>
              <Typography variant="h5" component="div">
                I can help with
              </Typography>
            </Grid>

            <Grid sx={{ mt: 1 }} container spacing={2}>
              <Grid sx={{ textAlign: "center" }} item xs={12} md={4}>
                <Typography variant="h5" component="div">
                  icon
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 5,
                    backgroundColor: "yellow",
                    justifyContent: "center",
                    "& > :not(style)": {
                      m: 1,
                      width: "98%",
                    },
                  }}
                >
                  <Paper
                    sx={{
                      backgroundColor: "black",
                      borderRadius: 5,
                      height: 200,
                      width: "80%",
                    }}
                    variant="outlined"
                    square
                  >
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{ color: "white" }}
                    >
                      icon
                    </Typography>

                    <Typography variant="h6" component="div">
                      icon
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
              <Grid sx={{ textAlign: "center" }} item xs={12} md={4}>
                <Typography variant="h6" component="div">
                  icon
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    borderRadius: 5,
                    alignItems: "center",
                    backgroundColor: "yellow",
                    justifyContent: "center",
                    "& > :not(style)": {
                      m: 1,
                      width: "98%",
                    },
                  }}
                >
                  <Paper
                    sx={{
                      backgroundColor: "black",
                      borderRadius: 5,
                      height: 200,
                      width: "80%",
                    }}
                    variant="outlined"
                    square
                  />
                </Box>
              </Grid>
              <Grid sx={{ textAlign: "center" }} item xs={12} md={4}>
                <Typography variant="h6" component="div">
                  icon
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 5,
                    backgroundColor: "yellow",
                    justifyContent: "center",
                    "& > :not(style)": {
                      m: 1,
                      width: "98%",
                    },
                  }}
                >
                  <Paper
                    sx={{
                      backgroundColor: "black",
                      borderRadius: 5,
                      height: 200,
                      width: "80%",
                    }}
                    variant="outlined"
                    square
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid px={2} id="sleepwell" container spacing={2}>
            <Grid sx={{ mt: 5 }} item xs={12}>
              <Typography>Did you sleep well</Typography>
            </Grid>

            <Grid sx={{ mt: 1 }} container spacing={2}>
              <Grid sx={{ mt: 3, textAlign: "center" }} item xs={12} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 5,
                    backgroundColor: "blue",
                    justifyContent: "center",
                    "& > :not(style)": {
                      m: 1,
                      width: "98%",
                    },
                  }}
                >
                  <Paper
                    sx={{
                      backgroundColor: "black",
                      borderRadius: 5,
                      height: 200,
                      width: "80%",
                    }}
                    variant="outlined"
                    square
                  />
                </Box>
              </Grid>
              <Grid sx={{ mt: 3, textAlign: "center" }} item xs={12} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    borderRadius: 5,
                    alignItems: "center",
                    backgroundColor: "blue",
                    justifyContent: "center",
                    "& > :not(style)": {
                      m: 1,
                      width: "98%",
                    },
                  }}
                >
                  <Paper
                    sx={{
                      backgroundColor: "black",
                      borderRadius: 5,
                      height: 200,
                      width: "80%",
                    }}
                    variant="outlined"
                    square
                  />
                </Box>
              </Grid>
              <Grid sx={{ mt: 3, textAlign: "center" }} item xs={12} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 5,
                    backgroundColor: "blue",
                    justifyContent: "center",
                    "& > :not(style)": {
                      m: 1,
                      width: "98%",
                    },
                  }}
                >
                  <Paper
                    sx={{
                      backgroundColor: "black",
                      borderRadius: 5,
                      height: 200,
                      width: "80%",
                    }}
                    variant="outlined"
                    square
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid px={2} id="writing" container spacing={2}>
            <Grid sx={{ mt: 6 }} item xs={12}>
              <Typography>Writing</Typography>
            </Grid>

            <Grid sx={{ mt: 1 }} container spacing={2}>
              <Grid sx={{ textAlign: "center" }} item xs={12} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 5,
                    backgroundColor: "green",
                    justifyContent: "center",
                    "& > :not(style)": {
                      m: 1,
                      width: "98%",
                    },
                  }}
                >
                  <Paper
                    sx={{
                      backgroundColor: "black",
                      borderRadius: 5,
                      height: 200,
                      width: "80%",
                    }}
                    variant="outlined"
                    square
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid mt={2} px={2} container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h2" component="div">
                Skills
              </Typography>
            </Grid>
            <Grid item sm={6} xs={12} md={3}>
              <Stack
                spacing={2}
                direction="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CircularStatic numb={75} />
                <Typography variant="h4" component="div">
                  Java
                </Typography>

                {/* <CircularPro
                gress variant="determinate" value={progress} /> */}
              </Stack>
            </Grid>

            <Grid item sm={6} xs={12} md={3}>
              <Stack
                spacing={2}
                direction="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CircularStatic numb={95} />
                <Typography variant="h4" component="div">
                  Javascript
                </Typography>
              </Stack>
            </Grid>

            <Grid item sm={6} xs={12} md={3}>
              <Stack
                spacing={2}
                direction="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CircularStatic numb={85} />
                <Typography variant="h4" component="div">
                  HTML
                </Typography>
              </Stack>
            </Grid>

            <Grid item sm={6} xs={12} md={3}>
              <Stack
                spacing={2}
                direction="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CircularStatic numb={85} />
                <Typography variant="h4" component="div">
                  CSS
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          <Grid mt={2} px={2} id="aboutme" container spacing={2}>
            <Grid item xs={12} md={8}>
              <Paper
                sx={{
                  backgroundColor: "black",
                  borderRadius: 5,
                  p: 4,
                }}
                variant="outlined"
                square
              >
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ color: "white" }}
                >
                  About Me
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ color: "white", mt: 2 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Et magnis dis parturient montes nascetur. Aliquet enim tortor
                  at auctor urna nunc. Pharetra diam sit amet nisl suscipit
                  adipiscing bibendum. Id donec ultrices tincidunt arcu non
                  sodales neque sodales ut. Integer enim neque volutpat ac
                  tincidunt. Lacus vel facilisis volutpat est velit egestas dui
                  id. Lectus arcu bibendum at varius vel pharetra vel. Ipsum
                  dolor sit amet consectetur adipiscing elit duis tristique
                  sollicitudin. Orci nulla pellentesque dignissim enim sit amet
                  venenatis. Imperdiet proin fermentum leo vel. Purus faucibus
                  ornare suspendisse sed nisi lacus sed.
                  <br />
                  <br /> Venenatis urna cursus eget nunc. Libero justo laoreet
                  sit amet cursus sit. Bibendum enim facilisis gravida neque
                  convallis. Ac orci phasellus egestas tellus. Aliquet nibh
                  praesent tristique magna sit amet purus. Lacus viverra vitae
                  congue eu. Consequat id porta nibh venenatis cras. Quam
                  adipiscing vitae proin sagittis nisl rhoncus. Ut placerat orci
                  nulla pellentesque dignissim enim. Adipiscing elit duis
                  tristique sollicitudin nibh sit amet. At consectetur lorem
                  donec massa sapien faucibus. Varius quam quisque id diam vel
                  quam elementum pulvinar etiam. In nisl nisi scelerisque eu
                  ultrices vitae auctor. Imperdiet massa tincidunt nunc pulvinar
                  sapien et ligula. A iaculis at erat pellentesque adipiscing
                  commodo elit at. Tempus iaculis urna id volutpat.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  backgroundColor: "black",
                  borderRadius: 5,
                  p: 4,
                }}
                variant="outlined"
                square
              >
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ color: "white" }}
                >
                  Area of Interest
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ color: "white", mt: 2 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <br />
                  <br /> Venenatis urna cursus eget nunc. Libero justo laoreet
                  sit amet cursus sit.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper
                sx={{
                  backgroundColor: "black",
                  borderRadius: 5,
                  p: 4,
                }}
                variant="outlined"
                square
              >
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ color: "white" }}
                >
                  Current Location
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ color: "white", mt: 2 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  backgroundColor: "black",
                  borderRadius: 5,
                  p: 4,
                }}
                variant="outlined"
                square
              >
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ color: "white" }}
                >
                  Favourite Tools
                </Typography>
                <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
                  <Tooltip title="Html">
                    <IconButton>
                      <HtmlIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Html">
                    <IconButton>
                      <HtmlIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Html">
                    <IconButton>
                      <HtmlIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Paper>
            </Grid>
          </Grid>

          <Grid mt={2} px={2} id="contact" container spacing={2}>
            <Typography variant="h2" component="div">
              Contact
            </Typography>
           

            <Grid item xs={12} md={12}>

            <Typography variant="h5" component="div" sx={{ color: "red" }}>
              Have a question or want to work together?
            </Typography>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "70ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                />

                
                <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                />
              </Box>
              
            </Grid>

            <Grid item xs={12} md={6}>
            <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                />

              {/* <Item>xs=8</Item> */}
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

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default Contact;