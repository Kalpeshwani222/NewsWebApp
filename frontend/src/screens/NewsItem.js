import React, { useState } from "react";
import { addSaveNews } from "../actions/savednewsAction";
import { useDispatch, useSelector } from "react-redux";
import { Redirect  } from 'react-router-dom'
import { ShareNewsAction } from "../actions/shareNewsAction";
import { history, useHistory,Link } from "react-router-dom";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import {
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";



const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};

const NewsItem = (props) => {
  const history = useHistory();

  //getting the props from app.js
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  const dispatch = useDispatch();

  //save news actions
  const saveNews = useSelector((state) => state.saveNews);
  const { loading, error, save } = saveNews;

  //current login user details
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //save news function passing parameters
  const Gettitle = (imageUrl, title, description, newsUrl, author) => {
    dispatch(addSaveNews(title, description, imageUrl, newsUrl, author));
  };

  //details news function
  const readMore = (url) => {
    window.open(url, "_blank");
  };

  //for model box
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //for share news state

  //  const ShareNews = useSelector((state) =>state.ShareNews);
  //  const {sloading,serror,ssuccess} = ShareNews;

  //for share news useState hook

  const [toEmail, setToEmail] = useState("");

  const shareNews = async (url) => {
    dispatch(ShareNewsAction(toEmail, url));
    handleClose();

    // const newURL = window.location.href;

    // const lastItem = newURL.substring(newURL.lastIndexOf("/") + 1);
    // console.log(lastItem);
    // history.push(`/${lastItem}`);

   
  };

  return (
    <>
      <div className="">
        <div className="">
          <Card sx={{ maxWidth: 345 }} style={{ margin: "4rem 0px 0px 0px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={
                  imageUrl
                    ? imageUrl
                    : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                }
                alt="no-image-found"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>

                <span className=" badge rounded-pill bg-danger">{source}</span>
                <p className="card-text">{description}...</p>

                <p className="card-text">
                  <small className="text-muted">
                    By {!author ? "Unknown" : author} on {date.substring(0, 10)}
                  </small>
                </p>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                variant="contained"
                size="small"
                onClick={() => readMore(newsUrl)}
              >
                Read more
              </Button>
              {userInfo ? (
                <>
                  <div style={{ marginLeft: "auto" }}>
                    <IconButton
                      aria-label="save"
                      onClick={() =>
                        Gettitle(imageUrl, title, description, newsUrl, author)
                      }
                    >
                      <BookmarkAddIcon />
                    </IconButton>

                    <IconButton aria-label="share" onClick={handleOpen}>
                      <ShareIcon />
                    </IconButton>
                  </div>

                  <StyledModal
                    aria-labelledby="unstyled-modal-title"
                    aria-describedby="unstyled-modal-description"
                    open={open}
                    onClose={handleClose}
                    BackdropComponent={Backdrop}
                  >
                    <Box sx={style}>
                      <Typography variant="h4">Share News </Typography>
                        {/* <h1>{location.pathname}</h1> */}
                      <TextField
                        id="outlined-basic"
                        label="From"
                        variant="outlined"
                        defaultValue={userInfo.email}
                        fullWidth
                        style={{ margin: "10px" }}
                        InputProps={{
                          readOnly: true,
                        }}
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="To"
                        fullWidth
                        style={{ margin: "10px" }}
                        value={toEmail}
                        onChange={(e) => setToEmail(e.target.value)}
                      />

                      <h6>{newsUrl}</h6>

                      {/* <Button variant="contained" style={{margin:"10px"}} onClick={shareNews}>Send</Button>
                       */}

                      <Button
                        variant="contained"
                        style={{ margin: "10px" }}
                        onClick={() => shareNews(newsUrl)}
                      >
                        Send
                      </Button>
                    </Box>
                  </StyledModal>
                </>
              ) : (
                <h6>.</h6>
              )}
            </CardActions>
          </Card>

          {/* <div className="card" style={{ width: "18rem" }}>
            <img
              src={
                imageUrl
                  ? imageUrl
                  : "https://images.hindustantimes.com/img/2021/11/19/1600x900/india-team-nz-bcci_1637303753067_1637303759509.jpg"
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}.......</h5>
              <span className=" badge rounded-pill bg-danger">{source}</span>
              <p className="card-text">{description}</p>

              <p className="card-text">
                <small className="text-muted">
                  By {!author ? "Unknown" : author} on {date}
                </small>
              </p>
              <a
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-primary"
              >
                Read More
              </a>

              <Button
                variant="contained"
                size="small"
                onClick={() =>
                  Gettitle(imageUrl, title, description, newsUrl, author)
                }
              >
                Save
              </Button>

             
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default NewsItem;
