import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Box,
  CardMedia,
  Grid,
  CardContent,
  Typography,
} from "@mui/material";
import Navbar from "../component/Navbar";
const Channels = () => {
  const handleClick = (url) => {
    window.open(url,"_self");
  };

  return (
    <>
      <Navbar />

      <div
        className="container"
        style={{
          margin: "5rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12} lg={8}>
            <Card sx={{ display: "flex" }} onClick={() => handleClick("/ndtv")}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  image="/ndtv.png"
                  alt="Live from space album cover"
                />
              </Box>

              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  NDTV
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={6} xs={12} lg={8}>
            <Card
              sx={{ display: "flex" }}
              onClick={() => handleClick("/hindustantimes")}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  image="/hindutan-time.png"
                  alt="Live from space album cover"
                />
              </Box>

              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Hindustan Times
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={6} xs={12} lg={8}>
            <Card
              sx={{ display: "flex" }}
              onClick={() => handleClick("/indianexpress")}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  image="/indian-exp.png"
                  alt="Live from space album cover"
                />
              </Box>

              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Indian Express
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={6} xs={12} lg={8}>
            <Card
              sx={{ display: "flex" }}
              onClick={() => handleClick("/news18")}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  image="/news-18.png"
                  alt="Live from space album cover"
                />
              </Box>

              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  News18
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={6} xs={12} lg={8}>
            <Card
              sx={{ display: "flex" }}
              onClick={() => handleClick("/digitaltrends")}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  image="/digital-trend.jpg"
                  alt="Live from space album cover"
                />
              </Box>

              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  digitaltrends
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Channels;
