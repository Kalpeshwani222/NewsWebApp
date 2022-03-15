import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listSavednews } from "../actions/savednewsAction";
import Loading from "../component/Loading";
import { useHistory } from "react-router-dom";
import Navbar from "../component/Navbar";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import {
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  CircularProgress,
  Container,
  Grid,
  Box,
} from "@mui/material";

const MySavedNews = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const saveNewsList = useSelector((state) => state.saveNewsList);
  const { loading, savednews, error } = saveNewsList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listSavednews());

    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <h1>saved news are</h1>

      <div className="container">
        {loading && <Loading />}

        {savednews?.reverse().map((news) => (
          <>
            {/* <div>{news.title}</div>
                    <div>{news.description}</div>
                    <div>{news.author}</div>
                    <div>{news.imageUrl}</div>
                    <div>{news.newsUrl}</div>
                     */}

            <Container maxWidth="lg">
              <Grid container spacing={2}>
                <Grid item sm={10} md={3} lg={4} xs={4}>
                  <Card
                    sx={{ maxWidth: 345 }}
                    style={{ margin: "20px 0px 0px 20px" }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={news.imageUrl}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {news.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {news.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={news.newsUrl}
                      >
                        Read more
                      </Button>

                      <IconButton aria-label="add to favorites">
                        <BookmarkBorderIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </>
        ))}
      </div>
    </>
  );
};

export default MySavedNews;
