import { Outlet, useNavigate } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
//////////////////////////////////////////////////////////////////
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import axios from 'axios'



function Navbar() {
 

  const pages = ["Products", "SELL", "LOGOUT"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const isLoggedIn = useSelector((state) => state.loggedIn.isActive);

  const {value : cartValue} = useSelector(state => state.cart)

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    navigate('/products')
  };
  

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={logo} alt="logo" className="logo" />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {isLoggedIn && (
              <Stack
                direction={"row"}
                spacing={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  width: "80%",
                }}
              >
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "500px",
                    height: "35px",
                    borderRadius: "20px 0 0 20px",
                  }}
                >
                  <InputBase
                    sx={{ ml: 2, flex: 1 }}
                    placeholder="Search Google Maps"
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <IconButton
                    type="button"
                    sx={{ p: "5px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
                <div
                  onClick={() => {
                    navigate("/cart");
                  }}
                  style={{ position: "relative" }}
                >
                  <AddShoppingCartIcon sx={{ fontSize: "1.7em" , cursor: 'pointer'}} />
                  {cartValue > 0 ? <p
                    style={{
                      position: "absolute",
                      backgroundColor: "#f57242",
                      width: "18px",
                      height: "18px",
                      right: "0",
                      top: "0",
                      fontSize: "10px",
                      display: 'grid',
                      alignItems: 'center',
                      textAlign: 'center',
                      overflow: 'hidden',
                      borderRadius: "50%",
                      cursor: 'pointer'
                    }}
                  >
                    {cartValue}
                  </p> : ''}
                </div>
              </Stack>
            )}
            {!isLoggedIn && (
              <Stack direction="row" spacing={1}>
                <Button
                  variant=""
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  LOGIN
                </Button>
                <Button
                  variant=""
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  SIGNUP
                </Button>
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}

export default Navbar;
