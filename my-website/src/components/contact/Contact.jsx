import * as React from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
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

export default function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <ResponsiveAppBar />

      <main>
        <Stack spacing={2} sx={{alignItems: 'center', marginTop:"20px"}}>
          <Typography variant="h2" component="div" gutterBottom>
            Send Message
          </Typography>
          <Grid container spacing={2}sx={{alignItems: 'center', display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <Grid item xs={12} md={6}>
              <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                  With a start adornment
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  fullWidth = "true"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>{" "}
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                  With a start adornment
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>{" "}
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="filled-multiline-static"
                label=""
                multiline
                rows={4}
                defaultValue=""
                variant="filled"
              />{" "}
            </Grid>
          </Grid>
        </Stack>
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
