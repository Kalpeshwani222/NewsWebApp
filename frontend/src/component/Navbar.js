import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import {useDispatch,useSelector} from 'react-redux';
import {logout} from "../actions/userAction";
import Badge from '@mui/material/Badge';


const Navbar = () => {
const history = useHistory();
  const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;
      const logoutHandler = () => {
      dispatch(logout());
      history.push("/");
    }


  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-light bg-warning"
        style={{ height: "4.5rem" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {localStorage.getItem("userInfo") ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/business">
                      Business
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">
                      Entertainment
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/health">
                      Health
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/science">
                      Science
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sport">
                      Sport
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/technology">
                      Technology
                    </Link>
                  </li>

                  <b style={{"align-item":"left"}}> {userInfo.name}</b>


<li className="nav-item">
                    <Link className="nav-link" to="/savednews">
                      {/* <Badge badgeContent={1} color="primary">SAVE</Badge> */}
                      Save
                    </Link>
                  </li>
                  <Button variant="contained" size="small" onClick={logoutHandler}>
                      LogOut
                    </Button>


                </>
              ) : (
                <>
                  <li>
                    {/* <Button variant="contained" size="small">
                      Login
                    </Button> */}

                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>

                  <li>
                    {/* <Button variant="contained" size="small">
                      Register
                    </Button> */}
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
