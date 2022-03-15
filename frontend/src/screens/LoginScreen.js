import React, { useEffect, useState } from "react";
import Loading from "../component/Loading";
import ErrorMessage from "../component/ErrorMessage";
import { history, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction";
import Navbar from "../component/Navbar";
import {CircularProgress} from '@mui/material'

const LoginScreen = () => {
  const history = useHistory();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() =>{
    if(userInfo){
      history.push('/')
    }
  },[history,userInfo])

 



  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

   useEffect(()=>{
    if(localStorage.getItem("userInfo")){
      history.push("/entertainment")
    }
  },[])

  return (
    <>
    <Navbar/>
    
      <div
        style={{ margin: "10rem", padding: "10px", border: "solid 1px black" }}
      >
        <div style={{ margin: "10px" }}>Login Page</div>

        {loading &&<CircularProgress/>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={submitHandler}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />

          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
