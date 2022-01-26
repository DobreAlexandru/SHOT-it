import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Grid } from "@mui/material";
import { Button, Box } from "@mui/material";
import { useUserAuth } from "../Contexts/AuthContext";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useState } from "react";
import { sendEmailVerification } from "firebase/auth";
import { styled } from "@mui/material/styles";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import BFirebase from "../../Images/BFirebase.png";
import BFirebaseWhite from "../../Images/BFirebaseWhite.png";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const InputMUI = styled("input")({
  display: "none",
});

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [password, setPassword] = useState("");

  const { user, resetPassword } = useUserAuth();

  const storage = getStorage();
  const storageRef = ref(storage, user.uid);

  const handleUpload = (e) => {
    e.preventDefault();
    uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
      getDownloadURL(storageRef).then((url) =>
        updateProfile(user, { photoURL: url })
      );
    });
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await resetPassword(user, password);
      setOpen(true);
    } catch (err) {}
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      sendEmailVerification(user);
    } catch (err) {}
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "80vh",
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Name</Typography>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {user.displayName}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}></Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Email</Typography>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            {user.emailVerified ? (
              <Typography>Your email is verified</Typography>
            ) : (
              <Grid
                container
                style={{ justifyContent: "space-between" }}
                component="form"
                noValidate
                onSubmit={handleVerify}
              >
                <Typography>Your email is not verified</Typography>
                <Button type="submit" variant="contained">
                  Send
                </Button>
              </Grid>
            )}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Profile Picture
            </Typography>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <label htmlFor="icon-button-file">
              <InputMUI
                accept="image/*"
                id="icon-button-file"
                type="file"
                onChange={handleUpload}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
                Upload image
              </IconButton>
            </label>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Reset Password
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ textAlign: "center" }}>
            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Grid container style={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                  <TextField
                    required
                    variant="standard"
                    name="password"
                    label="New Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Button type="submit" variant="contained">
                    Reset Password
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </AccordionDetails>
        </Accordion>
        {JSON.parse(localStorage.getItem("toggleDark")) ? (
          <img
            src={BFirebaseWhite}
            style={{
              maxWidth: "200px",
              paddingTop: "50px",
              alignSelf: "center",
              bottom: "0",
            }}
          />
        ) : (
          <img
            src={BFirebase}
            style={{
              maxWidth: "200px",
              paddingTop: "50px",
              alignSelf: "center",
              bottom: "0",
            }}
          />
        )}
      </Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          You have successfully reset your password!
        </Alert>
      </Snackbar>
    </div>
  );
}
