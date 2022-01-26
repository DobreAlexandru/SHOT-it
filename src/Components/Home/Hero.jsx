import React from "react";
import { useUserAuth } from "../Contexts/AuthContext";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import StandardImageList from "./HeroShowcase";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: JSON.parse(localStorage.getItem("toggleDark"))
      ? "rgba(0, 0, 0, 0)"
      : "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: JSON.parse(localStorage.getItem("toggleDark"))
      ? "rgba(0, 0, 0, 0.87)"
      : "rgba(255, 255, 255, 1)",
  },
};

const Hero = () => {
  AOS.init();
  const { user } = useUserAuth();

  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <Container>
        <div className="hero-background"></div>
        <Grid
          container
          style={{
            minHeight: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={8}>
            <Typography
              variant="h2"
              component="div"
              gutterBottom
              style={{ fontWeight: "500" }}
            >
              A home for all your photos
            </Typography>

            <Typography variant="h4" gutterBottom component="div">
              Find out more{" "}
              {user && (
                <Button
                  variant="contained"
                  component={Link}
                  to="/dashboard"
                  style={{ textDecoration: "none" }}
                >
                  Dashboard
                </Button>
              )}
              {!user && (
                <Button
                  variant="contained"
                  component={Link}
                  to="/signin"
                  style={{ textDecoration: "none" }}
                >
                  Sign In
                </Button>
              )}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            style={{ margin: "auto" }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <StandardImageList />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
