import React from 'react'
import {Card,CardActionArea,CardMedia,Typography,CardContent} from"@mui/material"
import Navbar from "../component/Navbar"
const NewsChannelListItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
   <div>

   <Navbar />
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
                    By {!author ? "Unknown" : author} 
                    {/* on {date.substring(0, 10)} */}
                  </small>
                </p>
              </CardContent>
          </CardActionArea>
      </Card>
   </div>
  )
}

export default NewsChannelListItem