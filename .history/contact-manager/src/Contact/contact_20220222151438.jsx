import React from "react";
import AppBar from "@mui/material/AppBar";

import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
            spacing={12}
          >
            <Grid item xs={12}>
              <Stack spacing={2}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  Contact Manager
                </Typography>

                <Typography
                  variant="h4"
                  component="div"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  This is a portfolio project to showcase knowledge of:{" "}
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    {[1, 2, 3].map((value) => (
                      <ListItem
                        key={value}
                        disableGutters
                        secondaryAction={
                          <IconButton>
                            <CommentIcon />
                          </IconButton>
                        }
                      >
                        <ListItemText primary={`Line item ${value}`} />
                      </ListItem>
                    ))}
                  </List>
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
              ></Paper>
            </Grid>
          </Grid>

          <Grid mt={2} px={2} id="contact" container spacing={2}>
            <Typography variant="h2" component="div">
              Contact
            </Typography>
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
