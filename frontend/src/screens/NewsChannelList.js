import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
import { Card, Container, Grid, CircularProgress, Box } from "@mui/material";
import Loading from "../component/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsChannelListItem from "./NewsChannelListItem";
const NewsChannelList = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    //     // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    const url = `https://newsapi.org/v2/everything?domains=${props.domains}&apiKey=${props.apiKey}&page=${page}&&pageSize=${props.pageSize}&from=2022-3-26&to=2022-3-26`;

    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yy = today.getFullYear();
    const from = yy + "/" + mm + "/" + dd;

    const url = `https://newsapi.org/v2/everything?domains=${
      props.domains
    }&apiKey=${props.apiKey}&page=${page + 1}&&pageSize=${
      props.pageSize
    }&from=${from}&to=${from}`;

    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };

  return (
    <>
      <div className="container my-3">
        {/* <h2 className="text-center" style={{ marginTop: "5rem" }}>
          headlines - {props.category}
        </h2> */}
        {loading && (
          <>
            <Box mt={10} pl={10}>
              <CircularProgress />
            </Box>
          </>
        )}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length != totalResults}
          loader={<Loading />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-6 col-lg-4" key={element.url}>
                    <NewsChannelListItem
                      title={element.title ? element.title.slice(0, 50) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 120)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

NewsChannelList.defaultProps = {
  domains: "in",
  pageSize: 8,
};

NewsChannelList.propTypes = {
  domains: PropTypes.string,
  pageSize: PropTypes.number,
};

export default NewsChannelList;
