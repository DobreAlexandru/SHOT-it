import React from "react";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Macbook from "../../Images/Macbook.png";
import MacbookWhite from "../../Images/MacbookWhite.png";
import Iphone from "../../Images/Iphone.png";
import IphoneWhite from "../../Images/IphoneWhite.png";

const Showcase = () => {
  return (
    <Container
      style={{
        paddingBottom: "100px",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        component="div"
        style={{ fontWeight: "400" }}
      >
        Find your photos across all your devices
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        style={{ fontWeight: "300" }}
      >
        and enjoy quick access to your memories everytime
      </Typography>

      <Grid
        container
        sx={{ marginTop: "5%", alignItems: "center", justifyContent: "center" }}
      >
        <Grid item xs={6}>
          <div data-aos="fade-right" data-aos-duration="2000">
            {JSON.parse(localStorage.getItem("toggleDark")) ? (
              <img src={Macbook} style={{ width: "100%" }} />
            ) : (
              <img src={MacbookWhite} style={{ width: "100%" }} />
            )}
          </div>
        </Grid>
        <Grid item xs={6}>
          <div data-aos="fade-up" data-aos-duration="2000">
            {JSON.parse(localStorage.getItem("toggleDark")) ? (
              <img src={Iphone} style={{ width: "50%", height: "100%" }} />
            ) : (
              <img src={IphoneWhite} style={{ width: "50%", height: "100%" }} />
            )}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Showcase;
