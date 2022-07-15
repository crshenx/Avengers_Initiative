import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, SearchIconWrapper, StyledInputBase } from "./HeaderStyles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Header.css";

function Header({ searchInput, handleChange, handleSubmit, resetHome }) {
  // menu dopdown state
  const dummyMenuItems = [
    {
      title: (
        <Link to="/" onClick={resetHome}>
          Home
        </Link>
      ),
      id: 1,
    },
    {
      title: <Link to="myteam">My Team</Link>,
      id: 2,
    },
    {
      title: <Link to="about">About Us</Link>,
      id: 3,
    },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {dummyMenuItems.map((item) => (
              <MenuItem onClick={handleClose} key={item.id} value={item.title}>
                {item.title}
              </MenuItem>
            ))}
          </Menu>

          <Typography
            variant="h6"
            noWrap
            component="div"
            align="center"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            AVENGERS INITIATIVE APP
          </Typography>

          <Search>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchInput}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSubmit(e);
              }}
              onChange={handleChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
