import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link to='/' style={{ textDecoration: 'none' }}>
            <Typography variant="h6" color='white' fontWeight='bolder' >Formulario</Typography>
        </Link>
        <div style={{ flex: 1}} />
        <Link to='/concursantes' style={{ textDecoration: 'none' }}>
            <Typography variant="h6" color='white'>Lista de concursantes</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
