import React from "react";
// MUI STYLE IMPORTS
import { Search, SearchIconWrapper, StyledInputBase } from "./HeaderStyles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import MenuListComposition from "./MenuList";
import { MenuList } from "@mui/material";

function Header({ searchInput, heroes, handleChange, handleSubmit }) {
  // menu dopdown state

  //end menu state

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
          ></IconButton>
          <MenuListComposition />
          <Typography
            variant="h6"
            noWrap
            component="div"
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
