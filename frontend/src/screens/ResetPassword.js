import React, { useState } from "react";
import { Button, Container, TextField, CircularProgress,Box } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import PasswordChange from "./PasswordChange";
import Navbar from "../component/Navbar";
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpForm, showForm] = useState(true);

  const sendOtp = async () => {


    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      setLoading(true);

      const response = await axios.post(
        "/api/reset/send-otp",
        {
          email,
        },
        config
      );
      const record = response.data;
      if (record.statusText == "Success") {
        toast.success(record.message);
        showForm(false);
      } else {
        toast.error(record.message);
      }

      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>

     
      <div style={{ margin: "6rem" }}>
    <Navbar />
      <ToastContainer />

      <Container component="main" maxWidth="xs">

      <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            ></Box>
        { otpForm ? 
        <>
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus />
            
          

             {loading ? (
                  <CircularProgress justify="center" />
                ) : (
                   <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={sendOtp}
            >
              Send OTP
            </Button>
                )}
            </>
        
        : <PasswordChange email = {email} />
        }
      </Container>
      
      </div>
    </>
  );
};

export default ResetPassword;
