import React from "react";
import { Typography, Box, Divider, Grid, Container, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";

function Copyright() {
  return (
    <Typography
      variant="h6"
      align="center"
      style={{ paddingBottom: "20px", paddingTop: "20px" }}
    >
      {"Copyright © "}
      Dobre Alexandru {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        height: "100px",
      }}
    >
      <Divider />
      <Container component="footer">
        <Grid
          container
          style={{
            paddingTop: "10px",
            textAlign: "center",
          }}
        >
          <Grid item xs={3}>
            <IconButton href="https://github.com/DobreAlexandru" size="large">
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              href="https://www.linkedin.com/in/dobre-alexandru-dib/"
              size="large"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              href="https://www.instagram.com/iamdibber/"
              size="large"
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton href="https://www.facebook.com/IAmDibber/" size="large">
              <FacebookIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
