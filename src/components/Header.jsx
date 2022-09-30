import React, { useState } from "react";
import {
  Fab,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { LogIn, SignUp } from "../pages";
import {
  AUTH_REDUCER,
  LANDING_ROUTE,
  LOGIN,
  LOGOUT,
  PREV_RIDES,
  PROFILE,
  SIGN_UP,
  USER_REDUCER,
  WALLET,
  WALLET_ROUTE,
} from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getNameInitials } from "../../utils/utils";
import { isLoggedIn } from "../redux/slices/authSlice";

import LOGO from "../assets/logo.png";

const settings = [PROFILE, LOGOUT];
const publicMenu = [SIGN_UP, LOGIN];
const privateMenu = [PREV_RIDES, WALLET];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [openReg, setOpenReg] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state[AUTH_REDUCER]);
  const userData = useSelector((state) => state[USER_REDUCER]);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    switch (event.currentTarget.textContent) {
      case SIGN_UP:
        setOpenReg(!openReg);
        break;
      case LOGIN:
        setOpenLogin(!openLogin);
        break;
      case PREV_RIDES:
        break;
      case WALLET:
        navigate(WALLET_ROUTE);
        break;
      default:
        break;
    }
    setAnchorElNav(null);
  };

  const handleRegisterOpenClose = () => {
    setOpenReg(!openReg);
  };

  const handleLoginOpenClose = () => {
    setOpenLogin(!openLogin);
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(isLoggedIn(false));
  };

  const handleCloseUserMenu = (event) => {
    switch (event.currentTarget.textContent) {
      case LOGOUT:
        handleLogout();
        break;
      default:
        break;
    }
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container justifyContent="space-between" alignItems="center">
              {isMobileView && (
                <Grid item>
                  <Box>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                    >
                      {(isAuth ? privateMenu : publicMenu).map(
                        (item, index) => (
                          <MenuItem key={index} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{item}</Typography>
                          </MenuItem>
                        )
                      )}
                    </Menu>
                  </Box>
                </Grid>
              )}

              <Grid item>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <img
                    width="100%"
                    height="100%"
                    src={LOGO}
                    component="link"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(LANDING_ROUTE)}
                  />
                </Box>
              </Grid>
              <Grid item xs="auto" container spacing={2} alignItems="center">
                <Grid item>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    {isAuth ? (
                      <>
                        <Button
                          onClick={handleCloseNavMenu}
                          sx={{ color: "white", display: "block" }}
                        >
                          {PREV_RIDES}
                        </Button>
                        <Button
                          onClick={handleCloseNavMenu}
                          sx={{ color: "white", display: "block" }}
                        >
                          {WALLET}
                        </Button>
                      </>
                    ) : (
                      <>
                        <Fab
                          sx={{
                            my: 2,
                            mr: 2,
                          }}
                          variant="extended"
                          color="secondary"
                          size="medium"
                          onClick={handleLoginOpenClose}
                        >
                          {LOGIN}
                        </Fab>
                        <Fab
                          sx={{
                            my: 2,
                          }}
                          variant="extended"
                          color="secondary"
                          size="medium"
                          onClick={handleRegisterOpenClose}
                        >
                          {SIGN_UP}
                        </Fab>
                      </>
                    )}
                  </Box>
                </Grid>
                {isAuth && (
                  <Grid item>
                    <Box>
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar sx={{ bgcolor: "secondary.dark" }}>
                          {getNameInitials(
                            userData?.firstName + " " + userData?.lastName
                          )}
                        </Avatar>
                      </IconButton>
                      <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        {settings.map((setting) => (
                          <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">
                              {setting}
                            </Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      {openLogin && <LogIn handleClose={handleLoginOpenClose} />}
      {openReg && <SignUp handleClose={handleRegisterOpenClose} />}
    </>
  );
};

export default Header;
