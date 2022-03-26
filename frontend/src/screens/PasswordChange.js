import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import { Button, Container, TextField, CircularProgress } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const PasswordChange = (props) => {
  const history = useHistory();


  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const[cpassword,setCPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const email = props.email;
  const changePassword = async () => {


    if(password != cpassword){
      toast.error("Password and Confirm Password does not match");
    }else{
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
    }
  };
  return (
    <>
      <ToastContainer />

      <TextField
        margin="normal"
        required
        fullWidth
        id="otp"
        label="Enter OTP"
        name="OTP"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        autoFocus
      />

      <TextField
        margin="normal"
        required
        fullWidth
        id="cpassword"
        label="Enter Confirm Password"
        name="cpassword"
        value={cpassword}
        onChange={(e) => setCPassword(e.target.value)}
        autoFocus
        type="password"
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
        type="password"
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
