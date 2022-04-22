import React, { useEffect } from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import {
//   Button,
//   CardActionArea,
//   CardActions,
//   IconButton,
//   CircularProgress,
//   Container,
//   Grid,
//   Box,
// } from "@mui/material";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import {Card,CardContent,IconButton,CardMedia} from "@mui/material"
import {Container,Typography,TextField,Checkbox,Grid,Button,Box,Link,Avatar,FormControlLabel, FormControl} from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }


const Raw = () => {


 
  return (
    <>
      {/* <Card sx={{ maxWidth: 345 }} style={{"margin":"20px 0px 0px 20px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small">Read more</Button>
       
         <IconButton aria-label="add to favorites">
          <BookmarkBorderIcon/>
        </IconButton>
      </CardActions>
    </Card>
  
  
    <CircularProgress  color="primary " /> */}

      {/* <Grid container spacing={1}>
        <Grid item sm={12} md={3} lg={4} xs={12}>
          <Box bgcolor="yellow" p={5} textAlign="center">
            1
          </Box>
        </Grid>

        <Grid item sm={12} md={3} lg={4} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">
            1
          </Box>
        </Grid>

        <Grid item sm={12} md={3} lg={4} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">
            1
          </Box>
        </Grid>

        <Grid item sm={12} md={3} lg={4} xs={12}>
          <Box bgcolor="blue" p={5} textAlign="center">
            1
          </Box>
        </Grid>
        <Grid item sm={12} md={3} lg={4} xs={12}>
          <Box bgcolor="green" p={5} textAlign="center">
            1
          </Box>
        </Grid>
      </Grid> */}

      {/* <Container maxWidth="lg">

      <Grid container spacing={2}>
      
        <Grid item sm={10} md={3} lg={12} xs={11}>
          <Card sx={{ maxWidth: 345 }} style={{ margin: "20px 0px 0px 20px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" size="small">
            Read more
          </Button>

          <IconButton aria-label="add to favorites">
            <BookmarkBorderIcon />
          </IconButton>
        </CardActions>
      </Card>



      <Card sx={{ maxWidth: 345 }} style={{ margin: "20px 0px 0px 20px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" size="small">
            Read more
          </Button>

          <IconButton aria-label="add to favorites">
            <BookmarkBorderIcon />
          </IconButton>
        </CardActions>
      </Card>


        </Grid>

        

      </Grid>

      </Container> */}

      {/* sucessfully created the cards */}

      {/* <Container>

         <Grid container spacing={2}>

        <Grid item sm={6} xs={12} lg={4}>
          <Box p={2} textAlign="center">
            <Card sx={{ maxWidth: 345 }} style={{ margin: "10px 0px 0px 10px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" size="small">
            Read more
          </Button>

          <IconButton aria-label="add to favorites">
            <BookmarkBorderIcon />
          </IconButton>
        </CardActions>
      </Card>
          </Box>
           
        </Grid>  
      
      <Grid item sm={6} xs={12} lg={4}>
          <Box p={2} textAlign="center">
            <Card sx={{ maxWidth: 345 }} style={{ margin: "10px 0px 0px 10px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" size="small">
            Read more
          </Button>

          <IconButton aria-label="add to favorites">
            <BookmarkBorderIcon />
          </IconButton>
        </CardActions>
      </Card>
          </Box>
           
        </Grid>  


        <Grid item sm={6} xs={12} lg={4}>
          <Box p={2} textAlign="center">
            <Card sx={{ maxWidth: 345 }} style={{ margin: "10px 0px 0px 10px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" size="small">
            Read more
          </Button>

          <IconButton aria-label="add to favorites">
            <BookmarkBorderIcon />
          </IconButton>
        </CardActions>
      </Card>
          </Box>
           
        </Grid>  

        <Grid item sm={6} xs={12} lg={4}>
          <Box p={2} textAlign="center">
            <Card sx={{ maxWidth: 345 }} style={{ margin: "10px 0px 0px 10px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" size="small">
            Read more
          </Button>

          <IconButton aria-label="add to favorites">
            <BookmarkBorderIcon />
          </IconButton>
        </CardActions>
      </Card>
          </Box>
           
        </Grid>  
      </Grid>
      </Container> */}

      {/* 
//for login */}
      {/* <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
       
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
       
          
        </Box>
        
      </Container>
    </ThemeProvider> */}

      {/* news channel cards */}

      {/* <div className="container mt-5">
        <Grid container spacing={2}>


          <Grid item sm={6} xs={12} lg={8}>


            <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardMedia
              component="img"
              
              image="/news-18.png"
              alt="Live from space album cover"
            />
          </Box>

          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Aaj Tak
            </Typography>
          </CardContent>
        </Card>


          </Grid>
        
         <Grid item sm={6} xs={12} lg={8}>
            <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardMedia
            style={{
              // width:"140px",
              // height:"140px",
              objectFit:"cover",
              margin:"0.5rem",
              borderRadius:"10px",
              
            }}
              component="img"
              
              image="/hindutan-time.png"
              alt="Live from space album cover"
            />
          </Box>

          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Aaj Tak
            </Typography>
          </CardContent>
        </Card>
          </Grid>

           <Grid item sm={6} xs={12} lg={8}>
            <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardMedia
              component="img"
               style={{
              // width:"140px",
              // height:"140px",
              objectFit:"cover",
              margin:"0.5rem",
              borderRadius:"10px",
              
              
            }}
              image="/aaj-tak.png" 
              alt="Live from space album cover"
            />
          </Box>

          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Aaj Tak
            </Typography>
          </CardContent>
        </Card>
          </Grid>

          <Grid item sm={6} xs={12} lg={8}>
            <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardMedia
              component="img"
               style={{
              // width:"140px",
              // height:"140px",
              objectFit:"cover",
              margin:"0.5rem",
              borderRadius:"10px",
              
              
            }}
              image="/indian-exp.png" 
              alt="Live from space album cover"
            />
          </Box>

          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Aaj Tak
            </Typography>
          </CardContent>
        </Card>
          </Grid>

          <Grid item sm={6} xs={12} lg={8}>
            <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardMedia
              component="img"
               style={{
              // width:"140px",
              // height:"140px",
              objectFit:"cover",
              margin:"0.5rem",
              borderRadius:"10px",
              
              
            }}
              image="/digital-trend.jpg" 
              alt="Live from space album cover"
            />
          </Box>

          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Aaj Tak
            </Typography>
          </CardContent>
        </Card>
          </Grid>
        
        </Grid>
      </div> */}
    </>
  );
};

export default Raw;
