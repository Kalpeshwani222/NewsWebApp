import React,{useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import Badge from "@mui/material/Badge";

const Navbar = () => {

  const history = useHistory();
  const dispatch = useDispatch();
const [show,setShow] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

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
             onClick={()=>setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {localStorage.getItem("userInfo") ? (
                <>
                  <li className="nav-item" >
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                      style={{fontSize:"19px"}}
                     
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/business" style={{fontSize:"19px"}} >
                      Business
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/entertainment" style={{fontSize:"19px"}}>
                      Entertainment
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/health" style={{fontSize:"19px"}}>
                      Health
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/science" style={{fontSize:"19px"}}>
                      Science
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sport" style={{fontSize:"19px"}}>
                      Sport
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/technology" style={{fontSize:"19px"}}>
                      Technology
                    </Link>
                  </li>

                  
                  <li className="nav-item">
                    <Link className="nav-link" to="/channels" style={{fontSize:"19px"}}>
                      Channels
                    </Link>
                  </li>
               

                </>
              ) : (
                <>
                  <li>
                    <Link className="nav-link" to="/login" style={{fontSize:"19px"}}>
                      Login
                    </Link>
                  </li>

                  <li>
                    <Link className="nav-link" to="/register" style={{fontSize:"19px"}}>
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>

            {localStorage.getItem("userInfo") ? (
              <>
               <span class="navbar-text">
                  <Link className="nav-link" to="/savednews" style={{fontSize:"19px"}}>
                    Save
                  </Link>
                </span>
                <span class="navbar-text">
                  <b style={{ "align-item": "left", margin:"0.5rem"}}> {userInfo.name}</b>
                </span>
               

                <span>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={logoutHandler}
                  >
                    LogOut
                  </Button>
                </span>

                
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
