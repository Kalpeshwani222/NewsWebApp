import React from "react";
import { Button } from "@mui/material";
import {addSaveNews} from "../actions/savednewsAction"
import { useDispatch, useSelector } from "react-redux";


const NewsItem = (props) => {

  
  let { title, description, imageUrl, newsUrl, author, date, source } = props;


  const dispatch = useDispatch();
  const saveNews = useSelector((state) => state.saveNews);

  const {loading,error,save} = saveNews;


  const Gettitle = (imageUrl, title, description, newsUrl, author) => {
      dispatch(addSaveNews(title,description,imageUrl,newsUrl,author))
  };

  // console.log(save);

  return (
    <>
      <div className="container-fluid">
        <div className="my-3">
          <div className="card" style={{ width: "18rem" }}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
