import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ResponsiveAppBar from "../appBar/AppBar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <ResponsiveAppBar />
      

      <main>
        <Box
          sx={{
            flexGrow: 1,
            paddingLeft: "30px",
            // paddingRight: "30px",
            marginTop: "10px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" gutterBottom component="div">
                h3. Heading
              </Typography>
              <Typography variant="h3" gutterBottom component="div">
                h3. Heading
              </Typography>
              <Typography variant="h3" gutterBottom component="div">
                h3. Heading
              </Typography>

              <Typography
                mt={5}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quos blanditiis tenetur
              </Typography>

              <Typography
                mt={5}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quos blanditiis tenetur
              </Typography>

              <Stack spacing={2}></Stack>
            </Grid>
            <Grid
              // mt={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: "center",
              }}
              item
              md={6}
              xs={12}
            >
              <img
                width="90%"
                alt=""
                src="https://cdn.pixabay.com/photo/2022/01/17/06/38/altai-6943982__340.jpg"
              />
            </Grid>
          </Grid>
        </Box>



        
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
