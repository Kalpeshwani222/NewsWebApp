import React,{useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import {logout} from "../actions/userAction";


const Home = () => {
const history = useHistory();

   const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const logoutHandler = () => {
      dispatch(logout());
      history.push("/");
    }


  //   useEffect(() => {
  //   if (!userInfo) {
  //     alert("user not fount");
  //     history.push("/");
  //   } 
  // }, [history, userInfo]);

    return (
    <div>

      <h1>{userInfo.name}</h1> 
      <button onClick={logoutHandler}>Logout</button>
    </div>
    
  )
}

export default Home