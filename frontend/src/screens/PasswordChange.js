import React, { useState } from "react";
import { Button, Container, TextField, CircularProgress } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const PasswordChange = (props) => {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const email = props.email;
  const changePassword = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      setLoading(true);

      const response = await axios.post(
        "/api/reset/change-password",
        {
          email,
          code,
          password,
        },
        config
      );

      if (response.data.statusText == "Success") {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
         setLoading(false);
      }
    } catch (error) {
      toast.error("Something went wrong");
       setLoading(false);
    }
  };
  return (
    <>
      <ToastContainer />

      <TextField
        margin="normal"
        required
        fullWidth
        id="password"
        label="Enter Password"
        name="password"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        autoFocus
      />

      <TextField
        margin="normal"
        required
        fullWidth
        id="password"
        label="Enter Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoFocus
      />

      <Button
          type="submit"
          onClick={changePassword}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Change Password
        </Button>
    </>
  );
};

export default PasswordChange;
