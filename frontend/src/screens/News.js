import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "../component/Loading";
import Loading from "../component/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "../component/Navbar";
import { history, useHistory } from "react-router-dom";
import { CircularProgress ,Box} from "@mui/material";


const News = (props) => {
   const history = useHistory();
   
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
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
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;


    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };

  const cmp =  props.category;

  useEffect(() =>{
    if(!localStorage.getItem("userInfo")){
      history.push("/")
    }
  },[])

  const theme = {
  spacing: 16,
}
  return (
    <>

    <Navbar />
      <div className="container my-3">
        {/* <h2 className="text-center" style={{ marginTop: "5rem" }}>
          headlines - {props.category}
        </h2> */}
        {loading && <><Box mt={10} pl={10}>
          <CircularProgress />
        </Box></>}

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
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description
                          ? element.description
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

News.defaultProps = {
  country: "in",
  pageSize: 8,
  default: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
