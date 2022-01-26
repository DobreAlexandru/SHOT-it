import React from "react";
import { Container, Grid } from "@mui/material";
import Firebase from "../../Images/Firebase.svg";
import Typography from "@mui/material/Typography";
import CloudStorage from "../../Images/CloudStorage.png";
import Authentication from "../../Images/Authentication.png";
import Firestore from "../../Images/Firestore.png";

const FirebaseShowcase = () => {
  return (
    <Container style={{ paddingBottom: "50px" }}>
      <Grid
        container
        style={{
          paddingBottom: "100px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={6} sm={4}>
          <div data-aos="zoom-in-right">
            <img src={Firebase} style={{ width: "100%" }} />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          style={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            component="div"
            style={{ fontWeight: "400" }}
          >
            Built with Firebase
          </Typography>
          <Grid container style={{ justifyContent: "right" }}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="div"
                style={{ fontWeight: "300" }}
              >
                Firestore <img src={Firestore} style={{ width: "1em" }} />
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="div"
                style={{ fontWeight: "300" }}
              >
                Cloud Storage{" "}
                <img src={CloudStorage} style={{ width: "1em" }} />
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="div"
                style={{ fontWeight: "300" }}
              >
                Authentication{" "}
                <img src={Authentication} style={{ width: "1em" }} />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Container>
  );
};

export default FirebaseShowcase;
