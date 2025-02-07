"use client";

import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import AuthModal from "./AuthModal";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component={Link} href="/" sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}>
            MyApp
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" onClick={() => setOpen(true)}>Login</Button>
            <Button color="secondary" variant="contained" onClick={() => setOpen(true)}>Sign Up</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Auth Modal */}
      <AuthModal open={open} handleClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
