"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  DialogActions,
  Tabs,
  Tab,
  Box,
  Typography,
} from "@mui/material";

interface AuthModalProps {
  open: boolean;
  handleClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, handleClose }) => {
  const [tab, setTab] = useState<"login" | "signup">("login");

  const handleTabChange = (_: React.SyntheticEvent, newValue: "login" | "signup") => {
    setTab(newValue);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle textAlign="center">
          {tab === "login" ? "Welcome Back!" : "Create an Account"}
      </DialogTitle>

      <DialogContent>
        {/* Tabs for Login & Sign Up */}
        <Tabs value={tab} onChange={handleTabChange} variant="fullWidth">
          <Tab label="Login" value="login" />
          <Tab label="Sign Up" value="signup" />
        </Tabs>

        <Box component="form" sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Email" type="email" fullWidth required />
          <TextField label="Password" type="password" fullWidth required />
          {tab === "signup" && <TextField label="Confirm Password" type="password" fullWidth required />}
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
            {tab === "login" ? "Login" : "Sign Up"}
          </Button>
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Typography variant="body2">
          {tab === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
          <Button color="primary" onClick={() => setTab(tab === "login" ? "signup" : "login")}>
            {tab === "login" ? "Sign Up" : "Login"}
          </Button>
        </Typography>
      </DialogActions>
    </Dialog>
  );
};

export default AuthModal;
