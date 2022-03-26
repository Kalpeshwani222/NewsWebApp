import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNewsAction, listSavednews } from "../actions/savednewsAction";
import Loading from "../component/Loading";
import { useHistory } from "react-router-dom";
import Navbar from "../component/Navbar";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from 'react-toastify';
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


  const newsDelete = useSelector((state) => state.newsDelete);
  const { loading:loadingDelete, error:errorDelete,success:successDelete } = newsDelete;


  const deleteHandler = (id) =>{
      dispatch(deleteNewsAction(id));  
      toast.success("Deleted Successfully",{
          position:"top-right"
        })
    }

  useEffect(() => {
    dispatch(listSavednews());

    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch,successDelete,]);

  const goto = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />


      <div className="container my-5"  >
        {loading && <><Box mt={10} pl={10}>
          <CircularProgress />
        </Box></>}

        {errorDelete &&  {errorDelete}}
       
        <Container>
          <Grid container spacing={2}>
            {savednews?.reverse().map((news) => (
              <>
                <Grid item sm={6} xs={12} lg={4}>
                  <Box p={2} textAlign="center">
                    <Card
                      sx={{ maxWidth: 345 }}
                      style={{ margin: "20px 0px 0px 20px" }}
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          // image={news.imageUrl}
                          image={
                  news.imageUrl
                    ? news.imageUrl
                    : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                }
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
                          onClick={() => goto(news.newsUrl)}
                        >
                          Read more
                        </Button>

                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                          onClick={() => deleteHandler(news._id)}
                          className="btn btn-danger" 
                          style={{"background":"red"}}
                          endIcon={<DeleteIcon />}
                        >
                          Delete
                        </Button>

                        
                      </CardActions>
                    </Card>
                  </Box>
                </Grid>
              </>
            ))}

            <ToastContainer />
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default MySavedNews;
