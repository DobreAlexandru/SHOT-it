import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useUserAuth } from "../Contexts/AuthContext";
import Avatar from "@mui/material/Avatar";
import CameraTwoToneIcon from "@mui/icons-material/CameraTwoTone";

export default function PrimarySearchAppBar() {
  const { user, logOut } = useUserAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      handleMenuClose();
      handleMobileMenuClose();
    } catch (err) {
      console.log(err.message);
    }
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        component={Link}
        to="/dashboard"
        style={{ textDecoration: "none" }}
        onClick={handleMenuClose}
      >
        Dashboard
      </MenuItem>
      <MenuItem
        component={Link}
        to="/settings"
        style={{ textDecoration: "none" }}
        onClick={handleMenuClose}
      >
        Settings
      </MenuItem>
      <MenuItem onClick={handleMenuClose} onClick={handleLogout}>
        Log Out
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        component={Link}
        to="/dashboard"
        style={{ textDecoration: "none" }}
        onClick={handleMenuClose}
      >
        Dashboard
      </MenuItem>
      <MenuItem
        component={Link}
        to="/settings"
        style={{ textDecoration: "none" }}
        onClick={handleMenuClose}
      >
        Settings
      </MenuItem>
      <MenuItem onClick={handleMenuClose} onClick={handleLogout}>
        Log Out
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <AppBar position="static" color="transparent" sx={{ boxShadow: 0 }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="end"
              aria-label="logo"
              aria-haspopup="true"
              component={Link}
              to="/"
              color="inherit"
            >
              SH
              <CameraTwoToneIcon />
              T-it
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {user && (
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  {user.photoURL ? (
                    <Avatar alt="PFP" src={user.photoURL} />
                  ) : (
                    <AccountCircle />
                  )}
                </IconButton>
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
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              {user && (
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  {user.photoURL ? (
                    <Avatar alt="PFP" src={user.photoURL} />
                  ) : (
                    <AccountCircle />
                  )}
                </IconButton>
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
            </Box>
          </Toolbar>
        </AppBar>
        {user && renderMobileMenu}
        {user && renderMenu}
      </Container>
    </Box>
  );
}
