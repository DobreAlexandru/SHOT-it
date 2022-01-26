import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Share from "../../Images/Share.gif";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import SaveIcon from "@mui/icons-material/Save";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShareIcon from "@mui/icons-material/Share";

const ShareShowcase = () => {
  return (
    <Container style={{ paddingBottom: "100px" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{
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
            Easily share your memories
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            style={{ fontWeight: "300" }}
          >
            Share your photos with your friends and family, wherever they are
          </Typography>
          <Grid
            container
            style={{
              paddingTop: "5%",
              paddingBottom: "5%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              item
              xs={6}
              md={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div data-aos="zoom-in">
                <img
                  src={Share}
                  style={{
                    maxWidth: "100%",
                    borderRadius: "25px",
                  }}
                />
              </div>
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <DeleteForeverIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Delete"
                    secondary="Delete pictures you no longer need"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ShareIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Share"
                    secondary="Share with your loved ones"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <SaveIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Save"
                    secondary="Save everything, online or offline"
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>

          <Typography
            variant="h5"
            gutterBottom
            component="div"
            style={{ fontWeight: "300" }}
          >
            Save pictures of beautiful landscapes with only one click of a
            button
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShareShowcase;
