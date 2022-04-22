import React, { useState, useEffect } from "react";
import Loading from "../component/Loading";
import ErrorMessage from "../component/ErrorMessage";
import { history, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userAction";
import Navbar from "../component/Navbar";
import { CircularProgress } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import {
  Container,
  Typography,
  TextField,
  Checkbox,
  Grid,
  Button,
  Box,
  Avatar,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
const theme = createTheme();

const RegisterScreen = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [password, setPassword] = useState("");

  // const[error,setError] = useState(false);
  // const[loading,setLoading] = useState(false);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password != cpassword) {
      toast.error("Password and CPassword does not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      history.push("/entertainment");
    }
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ margin: "1rem" }}>
        <ToastContainer />
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              <Box
                component="form"
                onSubmit={submitHandler}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Enter Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Email"
                  label="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Password"
                  label="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  type="password"
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="cpassword"
                  label="Enter Confirm Password"
                  value={cpassword}
                  onChange={(e) => setCPassword(e.target.value)}
                  id="cpasswrod"
                  type="password"
                />

                {loading ? (
                  <CircularProgress justify="center" />
                ) : (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                )}

                <Grid container>
                  <Grid item xs>
                    <Link variant="body2" to="/reset-password">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="body2" to="/login">
                      {"You have an Account? Sign In"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
};

export default RegisterScreen;
