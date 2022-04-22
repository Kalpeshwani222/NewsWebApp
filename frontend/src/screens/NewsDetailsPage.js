import {
  Container,
  Grid,
  Card,
  Box,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  CardActions,
  Button,
  Fab,
} from "@mui/material";
import React from "react";
import Navbar from "../component/Navbar";
import SaveIcon from "@mui/icons-material/LibraryAdd";
import ShareIcon from "@mui/icons-material/Share";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SourceIcon from '@mui/icons-material/Source';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addSaveNews } from "../actions/savednewsAction";



const NewsDetailsPage = (props) => {

  //current login user details
 const userInfo = localStorage.getItem("userInfo");
 
 
  let { title, description, imageUrl, newsUrl, author, date, source } =
    props.location.state;

  const goto = (url) => {
    window.open(url, "_blank");
  };

  const dispatch = useDispatch();
   //save news function passing parameters
  const Gettitle = (imageUrl, title, description, newsUrl, author) => {
    dispatch(addSaveNews(title, description, imageUrl, newsUrl, author));
    toast.success("Save Successfully");
  };

  return (
    <>
      <Navbar />
 <ToastContainer />
      <div className="scroll" style={{ marginTop: "5rem" }}>
        <Container>
          <Card>
            <CardMedia
              component="img"
              style={{
                width: "100%",
                maxHeight: "400px",
              }}
              image={
                imageUrl
                  ? imageUrl
                  : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
              }
              alt={imageUrl}
            />

            <CardContent>
              <h2 >{title}</h2>

              <div className="row mt-3">
                <div className="col-6 col-md-6 col-lg-6 d-flex justify-content-start">
                  <p className="text-start"><ModeEditIcon /> Created by - {author}</p>
                </div>

                <div className="col-6 col-md-6 col-lg-6 d-flex justify-content-end">

                  {
                    userInfo ? <Fab color="primary" size="medium" aria-label="save" 
                  onClick={() =>
                        Gettitle(imageUrl, title, description, newsUrl, author)
                      }
                  >
                    <SaveIcon />
                  </Fab> :""
                  }
                </div>
              
                <div>
                  <CalendarMonthIcon />  {date.substring(0, 10)}
                  
                </div>

                <div>
                  <SourceIcon /> {source}
                </div>
              </div>

              <Typography padding={1} margin={1}
              style={{
                fontSize:"20px"
              }}
              >{description}</Typography>
            </CardContent>

            <CardActions padding={5} margin={5}>
              <Button
              
                variant="contained"
                size="small"
                onClick={() => goto(newsUrl)}
              >
                Read more
              </Button>
            </CardActions>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default NewsDetailsPage;
